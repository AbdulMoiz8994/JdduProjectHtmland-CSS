//the  get all html via class and id queryselector() 
let form=document.querySelector('.formAuth')
let userName=document.querySelector('.username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let number=document.querySelector('#number')
let confirmPassword=document.querySelector('#confirmPassword')


console.log(form);
console.log(userName);
console.log(email);
console.log(password);
console.log(number);
console.log(confirmPassword);




// make the function via addEventListencer which accept to things
function showError(input, message){
// from parentElement we get the paret's Tag
let formContorl=input.parentElement;
console.log(formContorl, message);
//   assign new class
    formContorl.className='field error'
 const smallTag=formContorl.querySelector('small')
//    console.log(smallTag);
   smallTag.innerHTML=message

}
function showSuccess(input){
    // same thing here
    let formContorl=input.parentElement
    // console.log(formContorl);
    //   assign new class
     formContorl.className='field success'
    
        
}
form.addEventListener('submit',(e) =>{
    // for avoding re-rendering to on submit 
           e.preventDefault();

//    after runing this function we need to again empty the input box


// conditions
if(userName.value === ''){
    // console.log(userName.value);
    showError(userName,'Please write username')
     
}else{
    showSuccess(userName)
}
// userName.value=""

if(email.value === ''){
    showError(email,'Please write email')
}else{
    showSuccess(email)
}
// email.value=""

if(number.value === ''){
    showError(number,'Please write number')
}else{
    showSuccess(number)
}
// number.value=""
if(password.value === ''){
    showError(password,'Please write Password')
}else{
    showSuccess(password)
}
// password.value=""
if(confirmPassword.value === ''){
    showError(confirmPassword,'Please write correct Password')
}else{
    showSuccess(confirmPassword)
}
// confirmPassword.value=""

if(password.value !== confirmPassword.value){
    alert('Please write correct Password')
}

})

