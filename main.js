//Hamburger menu: mostrare / nascondere il menu principale
const hamburger = document.querySelector(".hamburger-menu");
const hambLogo = document.querySelector(".header-right > a");
const hambClose = document.querySelector(".close");


hambLogo.addEventListener("click", 

function(){

    hamburger.classList.add("active");

}

);


hambClose.addEventListener("click", 

function(){

    hamburger.classList.remove("active");

}

);

