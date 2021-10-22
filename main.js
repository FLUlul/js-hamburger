//Hamburger menu: mostrare / nascondere il menu principale
const hamburger = document.querySelector(".hamburger-menu");
const hambLogo = document.querySelector(".header-right > a");
const hambClose = document.querySelector(".close");
/* const media = window.matchMedia("(max-width: 1000px)")

if (media.matches){
    hamburger.style.display = "none"
} */


hambLogo.addEventListener("click", 

function(){

    hamburger.style.display = "block";

}

);


hambClose.addEventListener("click", 

function(){

    hamburger.style.display = "none";

}

);