let grid_size = 16;
createGrid(grid_size);

btn = document.querySelector("button");
btn.addEventListener("click", () => {
    grid_size = prompt("Number of squares per side for new grid. Cannot exceed 100");
    if (grid_size <= 100 && grid_size > 0)
    {
        document.querySelector("#container").innerHTML = "";
        createGrid(grid_size);
    }
    else
    {
        alert("Enter a number between 1-100");
    }
});

function createGrid(grid_size) {
    const container = document.querySelector("#container");
    container.style.height = `${containerSize(grid_size)}px`;
    container.style.width = `${containerSize(grid_size)}px`;
    
    for (let i = 0; i < grid_size; i++)
    {
        for (let j = 0; j < grid_size; j++)
        {
            const new_div = document.createElement("div");
            new_div.setAttribute('class', 'grid');
            new_div.addEventListener("mouseover", () => {
                let randomColor = createRandomColor();
                new_div.style.backgroundColor = randomColor;
            });
            container.appendChild(new_div);
        }    
    }
    
}

function containerSize(grid_size) {
    let sideLength = (485 * (Math.sqrt(((grid_size)**2)/256)));
    console.log(sideLength);
    return sideLength;
}

function createRandomColor() {
    let component1 = Math.round(Math.random()*256).toString(16);
    let component2 = Math.round(Math.random()*256).toString(16);
    let component3 = Math.round(Math.random()*256).toString(16);
    let string = `#${component1}${component2}${component3}`;
    return string;
}

function onHover() {
    
}
