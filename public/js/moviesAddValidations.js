
console.log('moviesAddValidations.js vinculado correctamente!');

let numerOneDecimalExp = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
let twoDigitosExp = /^(\d{2})$/;
let fechaExp = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

window.addEventListener('load', () => {

    $('title').focus()

    $('title').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('title-msg').classList.add('info-input')
        $('title-msg').innerText = "Acepta caracteres alfanuméricos, y los siguientes caracteres : -!?%$#&."
        $('title-msg').classList.remove('error-input')
        if (this.value.trim().length >= 2 || this.value.trim().length <= 50) {
            this.classList.add('is-valid')
        }

    })
    $('title').addEventListener('blur', function () {
        if (this.value.trim().length < 2 || this.value.trim().length > 50) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('title-msg').classList.remove('info-input')
            $('title-msg').classList.add('error-input')
            $('title-msg').innerText = "El título debe tener entre 2 y 50 caracteres"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('title-msg').classList.remove('info-input')
            $('title-msg').classList.remove('error-input')
            $('title-msg').innerText = null
        }
    })

    $('rating').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('rating-msg').classList.add('info-input')
        $('rating-msg').innerText = "Acepta formato numérico de 0 a 10"
        $('rating-msg').classList.remove('error-input')
        if (twoDigitosExp.test(this.value.trim()) && this.value >= 0 || this.value <= 10) {
            this.classList.add('is-valid')
        }

    })
    $('rating').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('rating-msg').classList.remove('info-input')
            $('rating-msg').classList.add('error-input')
            $('rating-msg').innerText = "Debes ingresar un rating entre 0 a 10. Ej: 2.0"
        }
        else if (twoDigitosExp.test(this.value.trim()) && this.value < 0 || this.value > 10) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('rating-msg').classList.remove('info-input')
            $('rating-msg').classList.add('error-input')
            $('rating-msg').innerText = "Debes ingresar un rating entre 0 a 10. Ej: 2.0"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('rating-msg').classList.remove('info-input')
            $('rating-msg').classList.remove('error-input')
            $('rating-msg').innerText = null
        }
    })


    $('awards').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('awards-msg').classList.add('info-input')
        $('awards-msg').innerText = "Acepta formato numérico de 0 a 10"
        $('awards-msg').classList.remove('error-input')
        if (twoDigitosExp.test(this.value.trim()) && this.value >= 0 || this.value <= 10) {
            this.classList.add('is-valid')
        }

    })
    $('awards').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('awards-msg').classList.remove('info-input')
            $('awards-msg').classList.add('error-input')
            $('awards-msg').innerText = "Debes ingresar los premios ganados entre 0 a 10. Ej: 2.0"
        }
        else if (twoDigitosExp.test(this.value.trim()) && this.value < 0 || this.value > 10) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('awards-msg').classList.remove('info-input')
            $('awards-msg').classList.add('error-input')
            $('awards-msg').innerText = "Debes ingresar los premios ganados entre 0 a 10. Ej: 2.0"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('awards-msg').classList.remove('info-input')
            $('awards-msg').classList.remove('error-input')
            $('awards-msg').innerText = null
        }
    })


    $('release_date').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('release_date-msg').classList.add('info-input')
        $('release_date-msg').innerText = "Acepta fecha siguiendo el formato DD/MM/AAAA"
        $('release_date-msg').classList.remove('error-input')
        if (this.value) {
            this.classList.add('is-valid')
        }

    })
    $('release_date').addEventListener('blur', function () {
        if (!this.value) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('release_date-msg').classList.remove('info-input')
            $('release_date-msg').classList.add('error-input')
            $('release_date-msg').innerText = "Debes ingresar la fecha de estreno"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('release_date-msg').classList.remove('info-input')
            $('release_date-msg').classList.remove('error-input')
            $('release_date-msg').innerText = null
        }
    })

    $('length').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('length-msg').classList.add('info-input')
        $('length-msg').innerText = "La duración debe ser entre 60 a 360 minutos. Acepta formato numérico"
        $('length-msg').classList.remove('error-input')
        if (this.value.trim().length >= 60 || this.value.trim().length <= 360) {
            this.classList.add('is-valid')
        }

    })
    $('length').addEventListener('blur', function () {
        if (!numerOneDecimalExp.test(this.value.trim())) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('length-msg').classList.remove('info-input')
            $('length-msg').classList.add('error-input')
            $('length-msg').innerText = "La duración debe ser entre 60 a 360 minutos"
        } else if (this.value.trim() < 60 || this.value.trim() > 360) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('length-msg').classList.remove('info-input')
            $('length-msg').classList.add('error-input')
            $('length-msg').innerText = "La duración debe ser entre 60 a 360 minutos"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('length-msg').classList.remove('info-input')
            $('length-msg').classList.remove('error-input')
            $('length-msg').innerText = null
        }
    })

    $('genre_id').addEventListener('focus', function () {
        this.classList.remove('is-invalid')
        $('genre_id-msg').classList.add('info-input')
        $('genre_id-msg').innerText = "Selecciona un genero del desplegable"
        $('genre_id-msg').classList.remove('error-input')
        if (this.value.trim().length !== 0) {
            this.classList.add('is-valid')
        }

    })
    $('genre_id').addEventListener('blur', function () {
        if (this.value.trim().length === 0) {
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            $('genre_id-msg').classList.remove('info-input')
            $('genre_id-msg').classList.add('error-input')
            $('genre_id-msg').innerText = "Debes seleccionar un genero"
        } else {
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('genre_id-msg').classList.remove('info-input')
            $('genre_id-msg').classList.remove('error-input')
            $('genre_id-msg').innerText = null
        }
    })


    $('form-add').addEventListener('submit', async (e) => {
        e.preventDefault();
        let error = false;

        let elementForm = $('form-add').elements;


        for (let i = 0; i < elementForm.length - 1; i++) {
            if (!elementForm[i].value) {
                elementForm[i].classList.add('is-invalid')
                error = true
                elementForm[i].focus
            }
        }
        if (error) {
            $('error').style.display = "block"
            $('error-msg').innerHTML = `Debes completar los campos señalados: `
            for (let i = 0; i < elementForm.length - 1; i++) {
                if (elementForm[i].classList.contains('is-invalid')) {
                    $('error-msg').innerHTML += `<br>${elementForm[i].id}`
                }
            }

        } else if (!error) {
            for (let i = 0; i < elementForm.length - 1; i++) {
                elementForm[i].classList.add('is-valid')
            }

            try {
                let urlApi = '/api/movies/create'
                console.log(urlApi)

                let response = await fetch(urlApi, {
                    method: 'POST',
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

                if (result.data) {
                    $('info').innerHTML = '<span class="response"><i class="fas fa-info-circle"></i> Actualización exitosa.</span>'
                    $('error-msg').innerHTML = null;
                    alert('La película se guardó satisfactoriamente')
                    $('form-add').submit()
                } else {
                    $('info').innerHTML = '<span class="response fail"><i class="fas fa-info-circle"></i> Algo salió mal, intente nuevamente.</span>'
                }
            } catch (error) {
                console.log(error)
            }

        }

    })
})
