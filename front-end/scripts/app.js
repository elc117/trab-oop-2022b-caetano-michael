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
            <h2 class="accordion-header j_class ${index === 0 ? 'show' : ''}" id="${element.id}">
            <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${element.id}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="#collapse-${element.id}">
                ${element.title}
            </button>
            </h2>
        </div>
        `)
    })
})

$(function(){
    $('body').on('click', '.j_class', function(data){

        if($(`#collapse-${data.currentTarget.id}`).length) {
            console.log(`collapse-${data.currentTarget.id} existe`)

        } else {
            $('#accordionClass').append(`
            <div id="collapse-${data.currentTarget.id}" class="accordion-collapse collapse show" aria-labelledby="${data.currentTarget.id}"
            data-bs-parent="#accordionClass">
                <div class="accordion-body pe-5"></div>
            </div>
            `)

            getModule(data.currentTarget.id).then(module => {
                $(`#collapse-${data.currentTarget.id} .accordion-body`).prepend(`
                <div class='header-class d-flex flex-column'>
                    <h1>${module.data.title}</h1>
                    <p>${module.data.description}</p>
                </div>

                <div class="accordion" id="accordionLessons-${data.currentTarget.id}">
                <div>
                `)
                module.data.contents.forEach((element, index) => {
                    $(`#collapse-${data.currentTarget.id} #accordionLessons-${data.currentTarget.id}`).append(`
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="area-${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#class-${index}"
                                aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="class-${index}">
                                ${element.title}
                                </button>
                            </h2>
                            <div id="class-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="area-${index}" data-bs-parent="#accordionLessons-${data.currentTarget.id}">
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