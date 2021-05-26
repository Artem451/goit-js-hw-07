const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  ingredients.forEach(element => {
    const ulEl = document.querySelector('#ingredients')
    const newIngredient = document.createElement('li')
    newIngredient.textContent = element
    ulEl.appendChild(newIngredient)
});

