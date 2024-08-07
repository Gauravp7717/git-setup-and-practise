// const { DiCloud9 } = require("react-icons/di");


var bulb = document.querySelector("#color");
var btn =  document.querySelector("button");


btn.addEventListener("click",function(){
   
    if(btn.innerHTML == "on"){
        btn.addEventListener("click",function(){
            btn.innerHTML = "off";
            bulb.style.backgroundColor = "gray";
        })
    }
    else{
        btn.addEventListener("click",function(){
            btn.innerHTML = "on";
            bulb.style.backgroundColor = "yellow";
    })
}

})
   
