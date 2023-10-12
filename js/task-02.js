const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
const ingredientsItem = createIngredientList(ingredients);

function createIngredientList(element) {
  return element.map((ingredientText) => {
    const li = document.createElement("li");
    li.textContent = ingredientText;
    li.classList.add("item");
    return li;
  });
}

ul.append(...ingredientsItem);
console.log(ul);
