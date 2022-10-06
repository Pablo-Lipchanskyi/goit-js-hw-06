const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
const listElementToAdd = [];
ingredients.forEach(ingredient => {
  const listElementEl = document.createElement('li');
  listElementEl.textContent = ingredient;
  listElementEl.classList.add('item');
  listElementToAdd.push(listElementEl);
});
listEl.append(...listElementToAdd);