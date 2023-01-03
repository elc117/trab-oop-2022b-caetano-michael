$(function () {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
    })

    $('body').on('click', '.j_update_progress', async function(e) {

        const idUser = $('#content').attr('data-id')
        let content = parseInt($('#content').attr('data-content'))
        let module = parseInt($('#content').attr('data-module'))
        const currentContent = parseInt($(this).attr('data-class-id'))
        const moduleId = $(this).attr('aria-controls').substring(6,42)
        const currentModule = parseInt($(`#${moduleId}:not(:disabled)`).attr('data-module-id'))
        const isLastContent = $(`#accordionLessons-${moduleId} #area-${currentContent + 1}`).find('button').length === 0
        const totalModules = $('#content').attr('data-total-modules')
        let progress = 0

        if (currentContent > content) {
            if (totalModules == module) {
                console.log('terminei');
            } else {
                if (isLastContent) {
                    if (totalModules > module) {
                        module++

                        if (module != totalModules) {
                            content = 0
                        } else {
                            content ++
                            setTimeout(function() { 
                                $('#content').load('components/end.html', function() {
                                    $('#name').text($('#content').attr('data-name'))
                                })
                            }, 5000)
                        }
                    }
                    
                    $('#content').attr('data-module', module)
                    $(`#accordion-module .j_class[data-module-id="${module}"]`).find('button').prop('disabled', false)
                } else {
                    content++
                }
    
                $(`#accordionLessons-${moduleId} #area-${content + 1}`).find('button').prop('disabled', false)
    
                $('#content').attr('data-content', content)
                await instance.patch(`/progress/${idUser}`, { 
                    progress: {
                        content: content,
                        module: module
                    }
                })
            }
        }

        progress = calcProgress(totalModules, module)
        $('#progress').css('width', `${progress}%`).attr('aria-valuenow', progress).text(`${progress}%`)
    })
})

function calcProgress(total, module) {
    return ((module) * 100) / total
}