let questions = [
    {
       "questin":"Wer hat HTML erfunden?", 
       "answer_1":"Rabin Williams", 
       "answer_2":"Lady Gaga", 
       "answer_3":"Tim Berners-Lee", 
       "answer_4":"Justin Bierber", 
       "right_answer": 3
    },
    {
        "questin":"Wer hat Herr der Ringe erfunden?", 
        "answer_1":"Peter Jakson", 
        "answer_2":"Christopher Nolan", 
        "answer_3":"Stephan Zager", 
        "answer_4":"JJR Tolkien", 
        "right_answer": 4
     },
     {
        "questin":"Wer hat in Openheimer die Haubtrolle?", 
        "answer_1":"Chilian Murphy", 
        "answer_2":"Justin Timberlake", 
        "answer_3":"Johny depp", 
        "answer_4":"Stephan Zager", 
        "right_answer": 1
     }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-question').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['questin'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    console.log(selectedQuestionNumber);

    if(selectedQuestionNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        console.log('richtige Antwort');
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        console.log('Falsche ANtwort');
    }
}