// Ejercicio 1
const div = document.querySelector('div')
const title = document.createElement('h1')  
let titleText = document.createTextNode('My presentation')
title.appendChild(titleText)
div.before(title)

// Ejercicio 2
const text = document.createElement('p')
let textoNodo = document.createTextNode('My best friend is mickey')
text.appendChild(textoNodo)
div.appendChild(text)

// Ejercicio 3
title.style.color = 'white'
title.innerHTML = '<strong>My presentation</strong>'
title.style.backgroundColor = 'teal'

/* --------------------------------------------------------------------------------------------------------------------------------*/
// Ejercicio 4
const codigo2 = document.querySelector('.codigo2')
const title2 = codigo2.querySelector( 'h2')
let listaOrd = document.querySelector('ol')
let listElm = Array.from(document.querySelectorAll('li'))
let newLi = document.createElement('li')
var listaDes = document.createElement('ul')

listElm.pop()

codigo2.appendChild(listaDes)

for (let i = 0; i < listElm.length; i++) {
    listaDes.appendChild(listElm[i])
}
codigo2.removeChild(listaOrd)
listaDes.setAttribute('class', 'listaDesordenada')
title2.setAttribute('class', 'title2')
listaDes.appendChild(newLi)
let newLiText = document.createTextNode('Recoger a los niños')
newLi.appendChild(newLiText)

listElm[0].setAttribute('class', 'cumplido')
listElm[2].setAttribute('class', 'cumplido')
listElm[1].setAttribute('class', 'fallido')
newLi.setAttribute('class', 'fallido')

