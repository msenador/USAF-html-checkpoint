document.addEventListener("DOMContentLoaded",function(){

    var loginButton = document.getElementById("loginBtn")
    loginButton.addEventListener("click",function(){
        alert("Welcome!");
        window.open('/Users/msenador/Desktop/ModernJS/USAF-html-checkpoint/page1.html','_blank');
    })

    var SavingPrivateRyan = document.getElementById("SPR")
    SavingPrivateRyan.addEventListener("click",function(){
        alert("This movie is based in WWII about an American squad that saves a soldier's life");
    })

})