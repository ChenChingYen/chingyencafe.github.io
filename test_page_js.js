const closeInfoBtn = document.querySelector(".close-info-btn");
const info = document.querySelector(".info-wrapper");
const qrscanner = document.querySelector(".qr-wrapper");

closeInfoBtn.addEventListener("click", function(){
    info.classList.add("close-info");
    qrscanner.classList.remove("close-info");
    alert('success');
});
