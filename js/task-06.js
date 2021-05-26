const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputValidation)

function onInputValidation () {
    console.log(inputEl.value.length)
    if(Number(inputEl.dataset.length) === inputEl.value.length) {
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.add('invalid')
    }
}