const root = document.querySelector("#categories");
const liItem = root.querySelectorAll(".item");
const lengthItem = liItem.length;

console.log(`Number of categories: ${lengthItem}`);

[...liItem].forEach((element) => {
  const nameTitle = element.firstElementChild.textContent;
  const quantity = element.lastElementChild;
  const quantityElement = quantity.children.length;
  console.log(`Category: ${nameTitle}`);
  console.log(`Elements: ${quantityElement}`);
});
