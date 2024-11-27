let gridValue = 0;
const button = document.querySelector(".button")
const grid = document.querySelector(".grid")

button.addEventListener("click", () => {
    let gridPrompt = prompt("Enter your grid size");
    if (!gridPrompt || isNaN(gridPrompt) || !Number.isInteger(Number(gridPrompt))) {
        alert("Please enter a valid integer");
    } else if (Number(gridPrompt) >= 100) {
        alert("Please enter a value less than 100");
    } else {
        gridValue = Number(gridPrompt);

        // Clear existing grid
        grid.innerHTML = '';

        // Create grid squares
        for (let i = 0; i < (gridValue*gridValue); i++) {
            const square = document.createElement("div");
            square.classList.add("gridSquare");
            // Set the width and height of each square based on grid size
            square.style.width = `${100/gridValue}%`;
            square.style.height = `${100/gridValue}%`;
            // Add mouseover event listener to each square
            square.addEventListener('mouseover', (e) => {
                if (e.shiftKey) {
                    square.style.backgroundColor = "red";
                }
            });
            grid.appendChild(square);
        }
    }

    document.querySelector('.grid').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.documentElement.style.setProperty('--grid-size', gridValue);



