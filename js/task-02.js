const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const ulEl = document.querySelector('#ingredients')


const makeIngridients = (ingredient) => {
  return ingredients.map( element => {
    const newIngredient = document.createElement('li')
    newIngredient.textContent = element
  
    return newIngredient
  })
}

const elements = makeIngridients(ingredients)

ulEl.append(...elements)

