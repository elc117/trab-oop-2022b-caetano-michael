$(function () {
    // const instance = axios.create({
    //     baseURL: 'http://localhost:3000',
    //     timeout: 1000,
    // })

    $('form').on('submit', function (e) {
        e.preventDefault()
        let name = ''

        $.each($(this).serializeArray(), function (i, field) {
            name = field.value
        })

        if (name) {
            // const getByName = async () => { return await instance.post('/session', { name: "teste" }) }

            // getByName().then(name => {
            //     console.log(name)
            // })

            $('#content').removeClass('bg-primary').load('components/course.html')
        }

    })
})