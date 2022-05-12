const accordion = document.querySelectorAll('.accordion')

accordion.forEach(function (e) {
    e.addEventListener('click', function () {
        let panel = e.querySelector('.panel')

        panel.style.display = 'block'
    })
})