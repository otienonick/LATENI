let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){

//check username is empty
if(userName.value.trim()===""){
   onError(userName, "Username cannot be empty");

}else{
  onSuccess(userName); 
}

//check email is empty
if(email.value.trim()===""){
    onError(email, "Email cannot be empty");
}else{
    //check email is valid
    if(!isValidEmail(email.value.trim())){
        onError(email,"Email is not valid");

    }else{
        onSuccess(email);
    }
}
//password check
if(pwd.value.trim()===""){
    onError(pwd, "password cannot be empty");
 
}else{

    if(pwd.value.length < 6){
  onError(pwd,"must contain atleast 6 characters")
  }
  else{
  
       onSuccess(pwd); 
    }
  }




 if(conPwd.value.trim()===""){
    onError(conPwd, "password cannot be empty");
 }
 else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Passwords do not match");
 
 }
 
 else
   onSuccess(conPwd); 
 }

 
//condition in order to redirect
if(userName,email,pwd,conPwd.value.trim() != ''  &&  pwd.value.trim()===conPwd.value.trim()  && pwd.value.length >=6) {
    window.location.href = "login.html";
 }
     
 }

document.querySelector("button")
.addEventListener("click" , (event)=>{
    event.preventDefault();
validateInput();

});
function onSuccess(input){

    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");

}
    function onError(input,message){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText=message;
        parent.classList.add("error");
        parent.classList.remove("success");
    
}

function isValidEmail(email){
return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}