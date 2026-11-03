
var button = document.querySelector(".intro_right button")
var modal = document.querySelector(".modal")
var close = document.querySelector(".btn_close")
button.onclick = function(){
    modal.style.display = "flex"
   
    setTimeout(() => {
    modal.style.opacity ="1"       
    }, 100)
}
close.onclick = function(){
     modal.style.opacity ="0" 
   
    setTimeout(() => {
          modal.style.display ="none"

    }, 1000)
    
    
    
}





