(() => {
    "use strict";
    let coffees = [
        {id: 1, name: "Light City", roast: "light"},
        {id: 2, name: "Half City", roast: "light"},
        {id: 3, name: "Cinnamon", roast: "light"},
        {id: 4, name: "City", roast: "medium"},
        {id: 5, name: "American", roast: "medium"},
        {id: 6, name: "Breakfast", roast: "medium"},
        {id: 7, name: "High", roast: "dark"},
        {id: 8, name: "Continental", roast: "dark"},
        {id: 9, name: "New Orleans", roast: "dark"},
        {id: 10, name: "European", roast: "dark"},
        {id: 11, name: "Espresso", roast: "dark"},
        {id: 12, name: "Viennese", roast: "dark"},
        {id: 13, name: "Italian", roast: "dark"},
        {id: 14, name: "French", roast: "dark"},
    ];

    let lightRoast = coffees.filter((coffee) => {
        return coffee.roast === "light";
    });

    let mediumRoast = coffees.filter((coffee) => {
        return coffee.roast === "medium";
    });

    let darkRoast = coffees.filter((coffee) => {
        return coffee.roast === "dark";
    });

    let addCoffeeButton = document.querySelector("#input-submit");
    addCoffeeButton.addEventListener("click", addCoffees);
    let inputName = document.querySelector("#input-name");
    let inputRoast = document.querySelector("#input-roast");
    let roastSelection = document.getElementById("roast-selection");
    roastSelection.addEventListener("change", updateCoffees);
    let submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", updateCoffees);
    let tbody = document.querySelector("#coffees");
    tbody.innerHTML = renderCoffees(coffees);

    // Search functionality
    let searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("keyup", searchCoffees);

    // takes in a coffee object and returns the DOM representation of it
    function renderCoffee(coffee) {
        let html = '<div class="coffee-inject">';
        html += `<p>Roast: ${coffee.roast}</p>`;
        html += `<h2>${coffee.name}</h2>`;
        html += `<button class="view-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg> View</button>
        <button class="buy-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>Add to Cart</button>`;
        html += "</div>";
        return html;
    }

    // takes in an array of coffee objects and renders them to the tbody
    function renderCoffees(coffees) {
        let html = "";
        for (let i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

    // searches the coffees array for the input value and returns the coffees that match the input value
    function searchCoffees() {
        let searchRoast = searchBox.value.toLowerCase();
        let filteredCoffees = [];
        coffees.forEach((coffee) => {
            if (coffee.name.toLowerCase().includes(searchRoast)) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

    // adds a new coffee to the coffees array
    function addCoffees(input) {
        let addID = coffees.length + 1;
        let addName = inputName.value.toString();
        let addRoast = inputRoast.value.toString();
        input = {id: addID, name: addName, roast: addRoast};
        coffees.push(input);
        tbody.innerHTML = renderCoffees(coffees);
    }

    //  updates the coffees array based on the roast selection
    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];
        if (selectedRoast === "All") {
            filteredCoffees = coffees;
        } else if (selectedRoast === "Light") {
            filteredCoffees = lightRoast;
        } else if (selectedRoast === "Medium") {
            filteredCoffees = mediumRoast;
        } else if (selectedRoast === "Dark") {
            filteredCoffees = darkRoast;
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
})();