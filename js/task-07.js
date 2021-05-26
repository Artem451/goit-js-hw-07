const refs = {
    inputRangeEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text')
}


console.log(refs.inputRangeEl.value)

refs.inputRangeEl.addEventListener('input', onRangeInputChange)

function onRangeInputChange () {
    refs.textEl.style.fontSize = `${refs.inputRangeEl.value}px`
}
