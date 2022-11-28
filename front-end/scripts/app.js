$(function () {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000
    })

    const getIndex = async () => { return await instance.get('/index') }
    const getModule = async (id) => { return await instance.get(`/module/${id}`) }

    getIndex().then(v => {
        v.data.forEach((element, index) => {
            $('#accordion-module').append(`
            <div class="accordion-item">
                <h2 class="accordion-header j_class" id="${element.id}">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${element.id}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="#collapse-${element.id}">
                    ${element.title}
                </button>
                </h2>
            </div>
            `)
        })

        $('.j_class').each((index, element) => {
            console.log(element, index)

            if ($(`#collapse-${index}`).length) {
                console.log(`collapse-${index} existe`)
            } else {
                $('#accordionClass').append(`
                    <div id="collapse-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${index}"
                    data-bs-parent="#accordionClass">
                        <div class="accordion-body pe-5"></div>
                    </div>
                `)

                getModule(index).then(module => {
                    $(`#collapse-${index} .accordion-body`).prepend(`
                    <div class='header-class d-flex flex-column'>
                        <h1>${module.data.title}</h1>
                        <p>${module.data.description}</p>
                    </div>
    
                    <div class="accordion" id="accordionLessons-${index}">
                    <div>
                    `)
                    module.data.contents.forEach((element, id) => {
                        $(`#collapse-${index} #accordionLessons-${index}`).append(`
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="area-${id}">
                                    <button class="accordion-button ${index === 0 && id === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#class-${index}-${id}"
                                    aria-expanded="${id === 0 ? 'true' : 'false'}" aria-controls="class-${index}-${id}">
                                    ${element.title}
                                    </button>
                                </h2>
                                <div id="class-${index}-${id}" class="accordion-collapse collapse ${id === 0 ? 'show' : ''}" aria-labelledby="area-${id}" data-bs-parent="#accordionLessons-${index}">
                                    <div class="accordion-body">
                                        <p>${element.description}</p>
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