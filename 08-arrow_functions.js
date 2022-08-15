const add = (x,y) => {
    return x+y
}


const button = document.createElement('button')
button.innerText = 'click me'

                                // funcion flecha
button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)