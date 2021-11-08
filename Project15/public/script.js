// this is important to import beacuse we need to initiazlie it
// if we want ot use any service then we need to import it via getService with capital letter of service name
import { getDatabase, ref, set,push, child , get, onValue,remove } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";
import firebaseApp  from "./firebase.js";

const database=getDatabase(firebaseApp)
console.log(database);

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
    //    ref('userName').set(inputBox.value)

    // const key = Math.random() * 23167612
    // console.log(key);
    // this key generate by firebase
    const key=   push(ref(database, 'username')).key 
    set(ref(database, 'username/' + key), {
        username: inputBox.value,
        uniqueId: key,
    }).then(() =>{
        console.log("successfully passed");
    }).catch(() =>{
        console.log("Not Passed");
    })
        // and redirect us on this htm page when we submit the form
        location.href='quiz.html'
    }    
})


// function getfirebaseData(){
// //    once()
//  get(ref(database, 'username')).then((snapshot) =>{
//     // console.log(snapshot.val());
//     const result=snapshot.val();
//     console.log(result);
//     // if(!!snapshot.exists()){
//     //     console.log(snapshot.val());
//     // }else{
//     //     console.log("not data av");
//     // }
// }).catch((error) =>{
//     console.error(error);
// })
// }
// getfirebaseData()
  

// function realTime(){
//   onValue(ref(database,'username'),(snapshot) =>{
//             const data=snapshot.val();
//             console.log(data);
//   })  
// }
// realTime();


// function deleteData(){
//    remove(ref(database, 'username'))   
// }
// deleteData() 


// make the upate viia key matching
// function updateData(){
//     set(ref(database, 'username/-Mo-UTOsA7dCHyxHNRuS'),{
//         uniqueId: '-Mo-UTOsA7dCHyxHNRuS',
//         username: "Abdullah",
//     })
// }
// updateData()