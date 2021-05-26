const refs = {
    inputName: document.querySelector('#name-input'), 
    outputName: document.querySelector('#name-output'),
}

refs.inputName.addEventListener('input', outputNameChange)

function outputNameChange () {
    if(refs.inputName.value.trim() === "") {
        refs.outputName.textContent = 'незнакомец'
    } else if(refs.inputName.value.length > 0) {
        refs.outputName.textContent = refs.inputName.value
    }
}
