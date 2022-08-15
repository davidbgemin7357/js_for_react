const background = "yellow";
const color = "white";
const isAuthorized = false;

const button = document.createElement("button");
button.innerText = "click me";
button.style = `background: ${background}; color: ${color}`;
button.style = `background: ${isAuthorized ? "blue" : "red"}`;

button.addEventListener("click", () => {
    if (isAuthorized) {
        return "está autorizado";
    }
    alert("No está autorizado");
});

document.body.append(button);
