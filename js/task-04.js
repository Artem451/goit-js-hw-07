const countButton = document.querySelectorAll('#counter button')
let counterValue = document.querySelector('#value');
let spanElCounter = Number (counterValue.textContent)

countButton[0].addEventListener('click',() => {
    spanElCounter -= 1
    counterValue.textContent = spanElCounter
} )

countButton[1].addEventListener('click',() => {
    spanElCounter += 1
    counterValue.textContent = spanElCounter
} )

