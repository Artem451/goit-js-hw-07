const categoriesCount = document.querySelectorAll('.item')
console.log(`В списке ${categoriesCount.length} категории.`)

categoriesCount.forEach(element => {
    const categoriesName = element.querySelector('h2').textContent;
    const categotiesInerCount = element.querySelectorAll('li')
    console.log(`Категория: ${categoriesName}. Количество элементов: ${categotiesInerCount.length}`)
});