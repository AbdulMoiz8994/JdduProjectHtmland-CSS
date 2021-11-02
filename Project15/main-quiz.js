// get the dom element
let mainDiv=document.querySelector('.question_cont')

// make the list of question ain array of objects
let questions=[
    {
        question: 'Q1 CPU Stands for?',
        answer: "central processing unit",
        option:[
            "central processing unit",
             "cental programming unit",
             "central performance Unit",
             "central per unit"
        ]
    },
    {
        question: 'Q2 The term "Computer" is the derived from ?',
        answer: "latin",
        option:[
            "latin",
             "english",
             "german",
             "Arabic"
        ]
    },
    {
        question: 'Q3 Who is the father of Computer ?',
        answer: "Charles Babbage",
        option:[
            "Augusta Adaming",
            "Charles Babbage",
            "Mark",
            "Jenes Sifart"
        ]
    },
    {
        question: 'Q4 WWW Stands for ?',
        answer: "World Wide Web",
        option:[
            "World Whole Web",
             "Wide World Web",
             "Web World Wide",
             "World Wide Web"
        ]
    },
    {
        question: 'Q5 Who is the father of Internet ?',
        answer: "Vint Cerf",
        option:[
            "Vint Cerf",
             "Denis Riche",
             "Roward",
             "Watson Raowe"
        ]
    },
];


// make the counter of question 
let questionNum=0;
// score calculate
let score=0;

// calling function onload
var load=document.querySelector('body')
load.onload=function(){
    question(questionNum)
}
// creating the HTml via css
function question(e){
    //calling dom element of question
    const questionele=document.getElementById('questionElement')
    // console.log(questionele);
    questionele.innerHTML=questions[e].question
    // get the dom elements for options
    const options=document.getElementsByClassName('optionElement')
    // console.log(options);
    for(var i=0; i < options.length; i++){
        options[i].innerHTML=questions[e].option[i]
    }

}

function nextQuestion(){
    rightanswer(questionNum)    
    
    questionNum++;
    if(questionNum >= 5){
        //    alert(`This is your result ${score} out of 50`)
           const button=document.querySelector('.button');
            // console.log(button);    
                button.innerHTML='Result'
            //  if(button.innerHTML=='Result'){
            //     alert(`${score}`)
            //  }   
    }
    removeactiveclass()
     question(questionNum)

}


function putactiveclass(e){
    // console.log(e);  
    removeactiveclass()
    e.classList.add('active')
}

function removeactiveclass(){
    // get that element whihc active class applied
    const activeclass=document.getElementsByClassName('active')   
    // console.log(activeclass);
    // the could be applied on more than one options so we put the for loop 
    for(var i=0; i< activeclass.length; i++){
        // console.log(activeclass[0]);
    activeclass[i].classList.remove('active')            
    }
}
function rightanswer(e){
    const activeclass=document.getElementsByClassName('active')   
    // console.log(activeclass[0].innerHTML);
    for(var i=0; i < activeclass.length; i++){
        if(activeclass[i].innerHTML == questions[e].answer){
            console.log(score +=10);
        }
    }
    
}
