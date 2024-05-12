function eventBunton (button) {
    button.addEventListener("click", function(){
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        button.style.backgroundColor = document.body.style.backgroundColor === "orange" || document.body.style.backgroundColor === "red" ? "blue" : "red";
    });
}

function getRandomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export { eventBunton };
