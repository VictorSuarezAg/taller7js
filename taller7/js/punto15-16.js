window.onscroll = function () {scrollFunction()}

const btnTop = document.querySelector('#myBtn')
const nav = document.querySelectorAll('div')

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav[0].style.backgroundColor = 'red'
        btnTop.style.display = 'block'
    } else {
        nav[0].style.backgroundColor = 'black'
        btnTop.style.display = 'none'
    }
}

btnTop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})