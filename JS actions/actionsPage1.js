document.addEventListener("DOMContentLoaded",function(){
    
    var homeBtn = document.getElementById("homeBtn")
    homeBtn.addEventListener('click',function(){
        window.location.href = "/Users/msenador/Desktop/ModernJS/USAF-html-checkpoint/html/loginPage.html";
    })

    var SPR = document.getElementById("SPR")
    SPR.addEventListener("click",function(){
        alert("This movie is based in WWII about an American squad that saves a soldier's life");
    })

})