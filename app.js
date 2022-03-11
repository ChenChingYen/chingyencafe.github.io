// const nav = document.querySelector(".burger-icon");
// const links = document.querySelector(".nav-links");

// nav.addEventListener("click", function(){
//     links.classList.toggle("show-links");
// });

const closeBtn = document.querySelector(".close-message-btn");
const message = document.querySelector(".message-wrapper");

closeBtn.addEventListener("click", function(){
    message.classList.add("close-message");
});