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
             "Charles babbage",
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
        answer: "World Wide Web",
        option:[
            "Vint Cerf",
             "Denis Riche",
        ]
    },
];


// make the counter of question 
let questionNum=0;


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
    questionele.innerHTML=questions[0].question
    // get the dom elements for options
    const options=document.getElementsByClassName('optionElement')
    // console.log(options);
    for(var i=0; i < options.length; i++){
        options[i].innerHTML=questions[0].option[i]
    }

}