// const container = document.querySelector('.container')

// const modal = document.createElement("div");
// modal.style.display = "none";
// modal.innerHTML = container;
// document.body.appendChild(modal);


// const openButton = document.querySelector("#ac");
// openButton.addEventListener("click", function() {
//     modal.style.display = "block";
//     openButton.style.display = "none"
// });

// const closeButton = modal.querySelector("#baqla");
// closeButton.addEventListener("click", function() {
//     modal.style.display = "none ";
//     openButton.style.display = "block"
// });

// document.body.appendChild(openButton);


let modal = document.querySelector('.modal')
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    modal.classList.toggle('active')
})