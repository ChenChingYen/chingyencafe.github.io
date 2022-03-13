const closeInfoBtn = document.querySelector(".close-info-btn");
const info = document.querySelector(".info-wrapper");
const qrwrapper = document.querySelector(".qr-wrapper");

closeInfoBtn.addEventListener("click", function(){
    info.classList.add("close-info");
    qrwrapper.classList.remove("close-info");
});
