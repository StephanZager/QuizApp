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

let rightQuestion = 0;

let currentQuestion = 0;

function init(){
    document.getElementById('all-question').innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){

    if(currentQuestion >= questions.length){
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';

        document.getElementById('amount-of-Question').innerHTML = questions.length;
        document.getElementById('amount-of-right-Question').innerHTML = rightQuestion;
        document.getElementById('header-img').src = 'img/brain result.png';
    }else{

    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML= `${percent}`;
    console.log(percent);

    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['questin'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    
    let idOfRightAnswer = `answer_${question['right_answer']}`//das ist die id also answer_1 oder 2.. das $ ist die nummer

    if(selectedQuestionNumber == question['right_answer']){ //richrtige frage
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++;
      
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');       
    }
    document.getElementById('next-button').disabled = false; //button ist freigeschalten
}

function nextQuestion(){
    currentQuestion++; // zb von 0 auf 1
    showQuestion();
    document.getElementById('next-button').disabled = true;

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}