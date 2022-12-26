$(function () {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
    })

    $('body').on('click', '.j_update_progress', async function(e) {

        const idUser = $('#content').attr('data-id')
        const lesson = $('#content').attr('data-content')
        const module = parseInt($('#content').attr('data-module')) - 1
        const currentLesson = $(this).attr('data-class-id')
        const moduleId = $(this).attr('aria-controls').substring(6,42)
        const currentModule = $(`#${moduleId}:not(:disabled)`).attr('data-module-id')
        let nextLesson = parseInt(lesson)

        console.log("Current lesson: " + currentLesson, "\nStoped lesson: " + nextLesson);
        console.log("Current modaule: " + currentModule, "\nStoped module: " + module);

        if (currentLesson >= nextLesson && module == currentModule){
            nextLesson++
            if ($(`#accordionLessons-${moduleId} #area-${nextLesson}`).find('button').length === 1) {
                let newLesson = $(`#accordionLessons-${moduleId} #area-${nextLesson}`).find('button').attr('data-class-id')
                $(`#accordionLessons-${moduleId} #area-${nextLesson}`).find('button').prop('disabled', false)
                $('#content').attr('data-content', newLesson)
            }

            if($(`#accordionLessons-${moduleId} #area-${parseInt(nextLesson) + 1}`).find('button').length === 1) {
                $('#content').attr('data-content', nextLesson)

            } else {
                let newModule = parseInt(module) + 2
                $('#content').attr('data-module', newModule)
                $('#content').attr('data-content', 0)
                $(`#accordion-module .j_class[data-module-id="${parseInt(newModule) - 1}"]`).find('button').prop('disabled', false)
            }

            await instance.patch(`/progress/${idUser}`, { 
                progress: {
                    content: parseInt(lesson),
                    module: parseInt(module) + 1
                }
            })
        }
    })
})