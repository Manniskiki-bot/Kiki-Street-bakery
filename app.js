let displayCart = document.querySelector(".shopping");
let cart = document.querySelector(".cart");
let close = document.querySelector(".close");


displayCart.addEventListener("click", () => {
     cart.classList.add("active")
});
close.addEventListener("click", () => {
    cart.classList.remove("active")
});