$(function () {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    })

    const getIndex = async () => { return await instance.get('/index') }
    const getModule = async (id) => { return await instance.get(`/module/${id}`) }

    getIndex().then(v => {
        $('#name').text($('#content').attr('data-name'))
        const lessonProgress = parseInt($('#content').attr('data-content'))
        const moduleProgress = parseInt($('#content').attr('data-module'))
        const totalModules = $.map(v.data, function(n, i) { return i; }).length
        let progress = calcProgress(totalModules, moduleProgress)

        $('#progress').css('width', `${progress}%`).attr('aria-valuenow', progress).text(`${progress}%`)
        v.data.sort((x, y) => x.order < y.order)
        v.data.forEach((element, index) => {
            $('#accordion-module').append(`
            <div class="accordion-item">
                <h2 class="accordion-header j_class" id="${element.id}" data-module-id="${index}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${element.id}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="#collapse-${element.id}" ${index < lessonProgress ? '' : 'disabled'}>
                    ${element.title}
                </button>
                </h2>
            </div>
            `)
        })

        $('.j_class').each((idClass, element) => {
            if ($(`#collapse-${element.id}`).length) {
                console.log(`collapse-${element.id} existe`)
            } else {
                $('#accordionClass').append(`
                    <div id="collapse-${element.id}" class="accordion-collapse collapse ${idClass === 0 ? 'show' : ''}" aria-labelledby="${element.id}"
                    data-bs-parent="#accordionClass">
                        <div class="accordion-body pe-5"></div>
                    </div>
                `)

                getModule(element.id).then(module => {
                    $(`#collapse-${element.id} .accordion-body`).prepend(`
                    <div class='header-class d-flex flex-column'>
                        <h1>${module.data.module.title}</h1>
                        <p>${module.data.module.description}</p>
                    </div>
    
                    <div class="accordion" id="accordionLessons-${element.id}">
                    <div>
                    `)

                    const moduleActive = $(`#${element.id}`).attr('data-module-id')

                    module.data.contents.sort((x,y) => {
                        if(x.order < y.order) return -1
                        if(x.order > y.order) return 1
                        return 0
                    })
                    module.data.contents.forEach((content, id) => {
                        $(`#collapse-${element.id} #accordionLessons-${element.id}`).append(`
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="area-${id}">
                                    <button class="accordion-button j_update_progress ${id === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#class-${element.id}-${id}"
                                    aria-expanded="${id === 0 ? 'true' : 'false'}" aria-controls="class-${element.id}-${id}" ${moduleActive < (moduleProgress - 1) ? '' : (id <= lessonProgress  ? '' : 'disabled')} data-class-id="${id}">
                                    ${content.title}
                                    </button>
                                </h2>
                                <div id="class-${element.id}-${id}" class="accordion-collapse collapse ${id === 0 ? 'show' : ''}" aria-labelledby="area-${id}" data-bs-parent="#accordionLessons-${element.id}">
                                    <div class="accordion-body">
                                        <p>${content.description}</p>
                                    <div>
                                <div>
                            <div>
                        `)
                    })
                })
            }
        })
    })
})

function calcProgress(total, module) {
    return (module * 100) / total
}