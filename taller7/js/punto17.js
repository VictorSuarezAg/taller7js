let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector('#loader').style.display = 'none';
  document.querySelector('#myDiv').style.display = 'block';
}