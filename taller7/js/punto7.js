/* --------------------------------------------------------------------------------------------------------------------------------*/
// Ejercicio 7

const menu = document.querySelector('.icon');
let linkActive = document.querySelector('.active')
let links = document.querySelectorAll('a')

menu.addEventListener('click', function () {
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'block'
        links[i].style.width = '100%'
    }

    menu.style.position = 'absolute'
    menu.style.bottom = 0
    menu.style.right = 0
    menu.style.width = 'auto'
    menu.setAttribute('class', 'menuShow')

    let menuShow = document.querySelector('.menuShow')

    menuShow.addEventListener('click', function () {
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = 'none'
        }

        menu.style.display = 'block'
        linkActive.style.display = 'block'
        linkActive.style.width = 'auto'
    })
})