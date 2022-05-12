const openbtn = document.querySelector('.openbtn')
const body = document.querySelector('body')

openbtn.addEventListener('click', function () {
    let sidebar = document.querySelector('.sidebar')

    sidebar.style.width = '20%'
    body.style.marginLeft = '20%'
    body.style.transition = '.5s'

    let close = document.querySelector('.closebtn')

    close.addEventListener('click', function () {
        sidebar.style.width = 0
        body.style.marginLeft = 0
        body.style.transition = '.5s'
    })
})