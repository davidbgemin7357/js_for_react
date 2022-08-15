const button = document.createElement("button");
button.innerText = "click me";

const isAuthorized = true;

button.addEventListener("click", () => {
    if (isAuthorized) {
        return alert("está autorizado");
    }
    alert("No está autorizado");
});

document.body.append(button);
