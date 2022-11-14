(() => {
    "use strict";
    let coffees = [
        { id: 1, name: "Light City", roast: "light" },
        { id: 2, name: "Half City", roast: "light" },
        { id: 3, name: "Cinnamon", roast: "light" },
        { id: 4, name: "City", roast: "medium" },
        { id: 5, name: "American", roast: "medium" },
        { id: 6, name: "Breakfast", roast: "medium" },
        { id: 7, name: "High", roast: "dark" },
        { id: 8, name: "Continental", roast: "dark" },
        { id: 9, name: "New Orleans", roast: "dark" },
        { id: 10, name: "European", roast: "dark" },
        { id: 11, name: "Espresso", roast: "dark" },
        { id: 12, name: "Viennese", roast: "dark" },
        { id: 13, name: "Italian", roast: "dark" },
        { id: 14, name: "French", roast: "dark" },
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

    let tbody = document.querySelector("#coffees");
    tbody.innerHTML = renderCoffees(coffees);

    let submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", updateCoffees);

    let roastSearch = document.getElementById("form-control");
    roastSearch.addEventListener("keyup", searchCoffees);

    let roastSelection = document.getElementById("roast-selection");
    roastSelection.addEventListener("change", updateCoffees);

    let inputName = document.querySelector("#input-name");
    let inputRoast = document.querySelector("#input-roast");
    let addCoffeeButton = document.querySelector("#input-submit");
    addCoffeeButton.addEventListener("click", addCoffees);

    // Search functionality
    let searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("keyup", searchCoffees);

    // takes in a coffee object and returns the DOM representation of it
    function renderCoffee(coffee) {
        let html = '<div class="coffee-inject">';
        html += `<p>Roast: ${coffee.roast}</p>`;
        html += `<h2>${coffee.name}</h2>`;
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
        input = { id: addID, name: addName, roast: addRoast };
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