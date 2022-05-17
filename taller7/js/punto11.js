function myFunction() {
    const checkBox = document.getElementById('myCheck')
    const text = document.getElementById('text')

    if (checkBox.checked == true){
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}