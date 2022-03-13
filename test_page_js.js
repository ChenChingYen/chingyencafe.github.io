const closeInfoBtn = document.querySelector(".close-info-btn");
const info = document.querySelector(".info-wrapper");

closeInfoBtn.addEventListener("click", function(){
    info.classList.add("close-info");
});