// console.log("moiz");
let resultvalue= localStorage.getItem('value')
console.log('result' ,JSON.parse(resultvalue));

// get the dom element
let h1=document.getElementById('h1')
// and we add in the h1 tage
h1.innerHTML=resultvalue