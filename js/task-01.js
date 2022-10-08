 const list = document.querySelector("#categories");
 const items = list.querySelectorAll(".item");
items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log(' ');
});