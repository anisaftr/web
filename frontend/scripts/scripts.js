
// document.getElementsByTagName()

const h2 = document.getElementsByTagName('h2');
h2[0].style.color = '#99CCFF';
h2[0].style.backgroundColor='61AFAC';


//document.getElementsByClassName()

const button = document.getElementsByClassName('button');
button[0].style.color = '#33FFFF'
button[0].style.backgroundColor = '#3399FF';

//body

document.body.style.backgroundImage = "url(../frontend/images/download.jpg)"
document.body.style.backgroundSize = "100%"
document.body.style.backgroundRepeat = "no-repeat"

//document.querySelector()

const writer = document.querySelector(".writer").style
writer.color ="#3C959F"
writer.fontSize = "16px"

//document.querySelectorAll()

const nav = document.querySelectorAll(".isi")
for(let i=0; i<nav.length; i++){
    nav[i].style.display = "inline-block"
    nav[i].style.fontSize = "22px"
    nav[i].style.color = "#0D7EC0"
}

//Memanggil semua elemen isi
var x = document.querySelectorAll(".isi");

//mengatur backgroud color elemen isi pertama
x[0].style.backgroundColor = "#97D2F3"; 