let recipes = [
    {
        id: 1,
        title: "Pancakes",
        ingredients: ["2 cups Flour", "2 Eggs", "1.5 cups Milk"],
        instructions: "Mix ingredients and cook on a pan.",
        category: "Breakfast",
        favorite: true
    }
];

function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";
    recipes.forEach(recipe => {
        const div = document.createElement("div");
        div.classList.add("recipe");
        div.innerHTML = `
            <h2>${recipe.title}</h2>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        recipeList.appendChild(div);
    });
}

function addRecipe() {
    const title = prompt("Enter recipe title:");
    if (title) {
        recipes.push({ id: recipes.length + 1, title, category: "Other", favorite: false });
        renderRecipes();
    }
}

function deleteRecipe(id) {
    const index = recipes.findIndex(r => r.id === id);
    if (index !== -1) {
        recipes.splice(index, 1);
        renderRecipes();
    }
}

document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".recipe").forEach(recipe => {
        recipe.style.display = recipe.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
});

renderRecipes();