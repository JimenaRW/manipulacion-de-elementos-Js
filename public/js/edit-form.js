console.log('edit-form.js connection success')

$('title').focus();

$('form-edit').addEventListener('submit', async function (e) {
    e.preventDefault()
    try {
        let urlApi = '/api/movies/edit/' + window.location.href.slice(34)
        console.log(urlApi)

        let response = await fetch(urlApi,{
            method: 'PUT',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: e.target.title.value,
                rating: e.target.rating.value,
                awards: e.target.awards.value,
                release_date: e.target.release_date.value,
                length: e.target.length.value,
                genre_id: e.target.genre_id.value
            })
        })

        let result = await response.json()
        console.log(result.data)

        if (result.data == 0) {
            console.log('no pase')
            console.log(result)
            $('info').innerHTML = '<span class="response fail"><i class="fas fa-info-circle"></i> Algo salió mal, intente nuevamente.</span>'
        } else if (result.data == 1) {
            console.log(result)
            console.log('pase')
            $('info').innerHTML = '<span class="response"><i class="fas fa-info-circle"></i> Actualización exitosa.</span>'
        } else {
            console.log('no pase else')
            $('info').innerHTML = '<span class="response fail"><i class="fas fa-info-circle"></i> Algo salió mal, intente nuevamente.</span>'
        }
    } catch (error) {
        console.log(error)
    }
})
