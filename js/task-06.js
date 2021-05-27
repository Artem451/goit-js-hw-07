const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputValidation)

function onInputValidation () {
    console.log(inputEl.value.length)
    if(Number(inputEl.dataset.length) === inputEl.value.length) {
        inputEl.classList.toggle('valid')
    } else {
        inputEl.classList.toggle('invalid')
    }
}