// 'use strict';



let password= document.getElementById("password")
let confpassword = document.getElementById("confpassword")



function checkpassword(elem){
if (elem.value.length >0 ){
    if(elem.value != password.value){
        password.style.backgroundColor = "#E84B4B"
        confpassword.style.backgroundColor="#E84B4B"
    }
    else if (elem.value == password.value){
        password.style.backgroundColor = "green"
        confpassword.style.backgroundColor="green"
    }
}
else{
    password.style.backgroundColor = "white"
    confpassword.style.backgroundColor="white"
}
}


