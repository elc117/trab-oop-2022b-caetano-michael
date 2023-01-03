$(function () {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        let name = ''

        $.each($(this).serializeArray(), function (i, field) {
            name = field.value
        })

        if (name) {
            const getByName = async () => { return await instance.post('/session', { name: name }) }

            getByName().then(name => {
                $('#content').removeClass('bg-primary').load('components/course.html').attr({
                    "data-id": name.data.id,
                    "data-name": name.data.name,
                    "data-content": name.data.progress.content,
                    "data-module": name.data.progress.module
                })
            })
        }

    })

    $('.j_return_course').on('click', async function() {

        const name = $('#name').text()

        const getByName = async () => { return await instance.post('/session', { name: name }) }

            getByName().then(name => {
                $('#content').load('components/course.html').attr({
                    "data-id": name.data.id,
                    "data-name": name.data.name,
                    "data-content": name.data.progress.content,
                    "data-module": name.data.progress.module
                })
            })
    })
})