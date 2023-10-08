const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const root = document.querySelector("#ingredients");
const firstItem = document.createElement("li");
firstItem.classList.add("item");
firstItem.textContent = "Potatoes";
const secondItem = document.createElement("li");
secondItem.classList.add("item");
secondItem.textContent = "Mushrooms";
const thirdItem = document.createElement("li");
thirdItem.classList.add("item");
thirdItem.textContent = "Garlic";
const fourthItem = document.createElement("li");
fourthItem.classList.add("item");
fourthItem.textContent = "Tomatos";
const fifthItem = document.createElement("li");
fifthItem.classList.add("item");
fifthItem.textContent = "Herbs";
const sixthItem = document.createElement("li");
sixthItem.classList.add("item");
sixthItem.textContent = "Condiments";
root.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
console.log(root);
