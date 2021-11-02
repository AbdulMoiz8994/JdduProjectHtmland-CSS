// make th click handler function 
// take the dom elements
const quizForm=document.forms['Quiz_form'];
// make the eventListener of submit button and function
// console.log(quizForm);
quizForm.addEventListener('submit',(e) =>{
      e.preventDefault()
    //   jis form ki id Quiz_form ho or uska ander input typetext ho wo get karna
    let inputBox=document.querySelector('#Quiz_form input[type=text]')
    // make the condition + authentication
    // console.log(inputBox.value);
    if(inputBox.value !== ''){
        // we are storage in localstorage via key and value pair 
        localStorage.setItem('Name',inputBox.value)
        // and redirect us on this htm page when we submit the form
        location.href='quiz.html'
    }

})
