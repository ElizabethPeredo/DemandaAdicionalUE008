let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar__items");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

let menu_inversion1 = document.querySelector("#menu-inversion1");
let menu_inversion2 = document.querySelector("#menu-inversion2");

let inversion1 = document.querySelector("#inversion1");
let inversion2 = document.querySelector("#inversion2");

menu_inversion1.onclick = () => {
    inversion1.classList.remove("invisible");
    inversion1.classList.toggle("visible");
}
menu_inversion2.onclick = () => {
    inversion2.classList.remove("invisible");
    inversion2.classList.toggle("visible");
}