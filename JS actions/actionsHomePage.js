document.addEventListener("DOMContentLoaded",function(){

    var loginButton = document.getElementById("loginBtn")
    loginButton.addEventListener("click",function(){
        alert("Welcome!");
        window.open('/Users/msenador/Desktop/ModernJS/USAF-html-checkpoint/html/page1.html','_blank');
    })

    var homeBtn = document.getElementById("homeBtn")
    homeBtn.addEventListener('click',function(){
        window.location.href = "/Users/msenador/Desktop/ModernJS/USAF-html-checkpoint/loginPage.html";
    })

    var SPR = document.getElementById("SPR")
    SPR.addEventListener("click",function(){
        alert("This movie is based in WWII about an American squad that saves a soldier's life");
    })

})