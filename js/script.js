document.getElementById("Header").innerHTML =
    '<div class="navbar__container">' +
    '<div class="navbar__logo">' +
    '<a href="https://elizabethperedo.github.io/DemandaAdicionalUE008/">' +
    '<i class="">' +
    '</i>Unidad Ejecutora 008</a >' +
    '</div >' +
    '<div class="navbar__items">' +
    '<ul>' +
    '<a href="https://elizabethperedo.github.io/DemandaAdicionalUE008/">Home</a>' +
    '<a href="./anexo1.html">Anexo 1</a>' +
    '<a href="./anexo2.html">Anexo 2</a>' +
    '<a href="./anexo3.html">Anexo 3</a>' +
    '<a href="./anexo4.html">Anexo 4</a>' +
    '<a href="./anexo5.html">Anexo 5</a>' +
    '</ul>' +
    '</div>' +
    '<div class="navbar__icon">' +
    '<i class="fas fa-bars" id="menu-bars"></i>' +
    '<i class="fas fa-search" id="menu-search"></i>' +
    '</div>' +
    '</div >'

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar__items");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

