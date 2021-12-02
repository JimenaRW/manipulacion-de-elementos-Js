console.log('edit-form.js connection success')

window.addEventListener('load', () => {
    $('title-edit').focus()

    $('title-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('title-edit-msg').classList.add('info-input')
        $('title-edit-msg').innerText = "Acepta caracteres alfanuméricos, y los siguientes caracteres : -!?%$#&."
        $('title-edit-msg').classList.remove('error-input')
        if (this.value.trim().length >= 2 || this.value.trim().length <= 50) {
            this.classList.add('is-valid')
        }

    })
    $('title-edit').addEventListener('blur', function () {
        if (this.value.trim().length < 2 || this.value.trim().length > 50) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('title-edit-msg').classList.remove('info-input')
            $('title-edit-msg').classList.add('error-input')
            $('title-edit-msg').innerText = "El título debe tener entre 2 y 50 caracteres"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('title-edit-msg').classList.remove('info-input')
            $('title-edit-msg').classList.remove('error-input')
            $('title-edit-msg').innerText = null
        }
    })

    $('rating-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('rating-edit-msg').classList.add('info-input')
        $('rating-edit-msg').innerText = "Acepta formato numérico de 0 a 10"
        $('rating-edit-msg').classList.remove('error-input')
        if (twoDigitosExp.test(this.value.trim()) && this.value >= 0 || this.value <= 10) {
            this.classList.add('is-valid')
        }

    })
    $('rating-edit').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('rating-edit-msg').classList.remove('info-input')
            $('rating-edit-msg').classList.add('error-input')
            $('rating-edit-msg').innerText = "Debes ingresar un rating entre 0 a 10. Ej: 2.0"
        }
        else if (twoDigitosExp.test(this.value.trim()) && this.value < 0 || this.value > 10) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('rating-edit-msg').classList.remove('info-input')
            $('rating-edit-msg').classList.add('error-input')
            $('rating-edit-msg').innerText = "Debes ingresar un rating entre 0 a 10. Ej: 2.0"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('rating-edit-msg').classList.remove('info-input')
            $('rating-edit-msg').classList.remove('error-input')
            $('rating-edit-msg').innerText = null
        }
    })


    $('awards-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('awards-edit-msg').classList.add('info-input')
        $('awards-edit-msg').innerText = "Acepta formato numérico de 0 a 10"
        $('awards-edit-msg').classList.remove('error-input')
        if (twoDigitosExp.test(this.value.trim()) && this.value >= 0 || this.value <= 10) {
            this.classList.add('is-valid')
        }

    })
    $('awards-edit').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('awards-edit-msg').classList.remove('info-input')
            $('awards-edit-msg').classList.add('error-input')
            $('awards-edit-msg').innerText = "Debes ingresar los premios ganados entre 0 a 10. Ej: 2.0"
        }
        else if (twoDigitosExp.test(this.value.trim()) && this.value < 0 || this.value > 10) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('awards-edit-msg').classList.remove('info-input')
            $('awards-edit-msg').classList.add('error-input')
            $('awards-edit-msg').innerText = "Debes ingresar los premios ganados entre 0 a 10. Ej: 2.0"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('awards-edit-msg').classList.remove('info-input')
            $('awards-edit-msg').classList.remove('error-input')
            $('awards-edit-msg').innerText = null
        }
    })


    $('release_date-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('release_date-edit-msg').classList.add('info-input')
        $('release_date-edit-msg').innerText = "Acepta fecha siguiendo el formato DD/MM/AAAA"
        $('release_date-edit-msg').classList.remove('error-input')
        if (this.value) {
            this.classList.add('is-valid')
        }

    })
    $('release_date-edit').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('release_date-edit-msg').classList.remove('info-input')
            $('release_date-edit-msg').classList.add('error-input')
            $('release_date-edit-msg').innerText = "Debes ingresar la fecha de estreno"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('release_date-edit-msg').classList.remove('info-input')
            $('release_date-edit-msg').classList.remove('error-input')
            $('release_date-edit-msg').innerText = null
        }
    })

    $('length-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('length-edit-msg').classList.add('info-input')
        $('length-edit-msg').innerText = "La duración debe ser entre 60 a 360 minutos. Acepta formato numérico"
        $('length-edit-msg').classList.remove('error-input')
        if (this.value.trim().length >= 60 || this.value.trim().length <= 360) {
            this.classList.add('is-valid')
        }

    })
    $('length-edit').addEventListener('blur', function () {
        if (!numerOneDecimalExp.test(this.value.trim())) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('length-edit-msg').classList.remove('info-input')
            $('length-edit-msg').classList.add('error-input')
            $('length-edit-msg').innerText = "La duración debe ser entre 60 a 360 minutos"
        } else if (this.value.trim() < 60 || this.value.trim() > 360) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('length-edit-msg').classList.remove('info-input')
            $('length-edit-msg').classList.add('error-input')
            $('length-edit-msg').innerText = "La duración debe ser entre 60 a 360 minutos"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('length-edit-msg').classList.remove('info-input')
            $('length-edit-msg').classList.remove('error-input')
            $('length-edit-msg').innerText = null
        }
    })

    $('genre_id-edit').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('genre_id-edit-msg').classList.add('info-input')
        $('genre_id-edit-msg').innerText = "Selecciona un genero del desplegable"
        $('genre_id-edit-msg').classList.remove('error-input')
        if (this.value.trim().length !== 0) {
            this.classList.add('is-valid')
        }

    })
    $('genre_id-edit').addEventListener('blur', function () {
        if (this.value.trim().length === 0) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('genre_id-edit-msg').classList.remove('info-input')
            $('genre_id-edit-msg').classList.add('error-input')
            $('genre_id-edit-msg').innerText = "Debes seleccionar un genero"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('genre_id-edit-msg').classList.remove('info-input')
            $('genre_id-edit-msg').classList.remove('error-input')
            $('genre_id-edit-msg').innerText = null
        }
    })
})

$('form-edit').addEventListener('submit', async (e) => {
    e.preventDefault();
    let error = false;

    let elementForm = $('form-edit').elements;


    for (let i = 0; i < elementForm.length - 1; i++) {
        if (!elementForm[i].value) {
            elementForm[i].classList.add('is-invalid')
            error = true
            elementForm[i].focus
        }
    }
    if (error) {
        $('error').style.display = "block"
        $('error-edit-msg').innerHTML = `Debes completar los campos señalados: `
        for (let i = 0; i < elementForm.length - 1; i++) {
            if (elementForm[i].classList.contains('is-invalid')) {
                $('error-edit-msg').innerHTML += `<br>${elementForm[i].id}`
            }
        }

    } else if (!error) {
        for (let i = 0; i < elementForm.length - 1; i++) {
            elementForm[i].classList.add('is-valid')
        }

        try {
            let urlApi = '/api/movies/edit/' + Number(window.location.href.slice(34))
            console.log(urlApi)

            let response = await fetch(urlApi, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: e.target.title.value,
                    rating: e.target.rating.value,
                    awards: e.target.awards.value,
                    release_date: e.target.release_date.value,
                    length: e.target.length.value,
                    genre_id: e.target.genre_id.value,
                })
            })

            let result = await response.json()

            if (result.data == 0) {
                $('info').innerHTML = '<span class="response fail"><i class="fas fa-info-circle"></i> Algo salió mal, intente nuevamente.</span>'
            } else if (result.data == 1) {
                $('info').innerHTML = '<span class="response"><i class="fas fa-info-circle"></i> Actualización exitosa.</span>'
            } else {
                $('info').innerHTML = '<span class="response fail"><i class="fas fa-info-circle"></i> Algo salió mal, intente nuevamente.</span>'
            }
        } catch (error) {
            console.log(error)
        }
    }
})
