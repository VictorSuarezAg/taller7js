const dropbtn =  document.querySelector('.dropbtn')

dropbtn.addEventListener('click', function () {
    let dropdownContent = document.querySelector('.dropdown-content')

    dropdownContent.classList.toggle('show')
})