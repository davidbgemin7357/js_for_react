const title = document.createElement("h1");
const button = document.createElement("button");
title.innerText = "Hola mundo desde JS";
button.innerText = "click";
button.addEventListener("click", () => {
    title.innerText = "Texto actualizado con JS"
    alert('se realizó un click')
});

document.body.append(title);
document.body.append(button);
