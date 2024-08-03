export function renderForm(){
    const formTemplate = `
    <div class="form-container">
         <h2>Create an awesome Survey in a minutes</h2>   
        <div class="form-inner-div">
           <h1>Survey Form</h1>
           <div class="survey-title"><input type="text" placeholder="Enter Survey Title" id="survey-title"></div>
           <button id="add-question">Add Question</button>
           <button id= "save-survey-data-btn">save</button>
        </div>    
     
    </div>`
    document.getElementById('main-container').innerHTML = formTemplate   
    document.getElementById('add-question').addEventListener('click', function(){
       renderQuestion()  
    })
    document.querySelector('.survey-title').addEventListener('click', function(event) {
        if (event.target.className === 'delete-btn') {
            event.target.closest('.que-container').remove();
        }
    });
    document.getElementById('save-survey-data-btn').addEventListener('click', function(){
        saveSurveyData()
    })

}



export function renderQuestion(){
    const questionTemplate = `
    <div class="que-container">
        <div class="que"><input type="text" placeholder="Enter Your Question" class="question-input"></div>
        <div class="option-div">
            <input type="checkbox">
            <input type="text" class="option-input">                
        </div>
        <div class="option-div">
            <input type="checkbox">
            <input type="text" class="option-input">                
        </div>
        <div class="option-div">
            <input type="checkbox">
            <input type="text" class="option-input">                
        </div>
        <div class="option-div">
            <input type="checkbox">
            <input type="text" class="option-input">                
        </div>

        <button class="delete-btn">Delete</button>

    </div>`
    document.querySelector('.survey-title').innerHTML += questionTemplate   


}
//save all information of the form
function saveSurveyData(){
    const surveyTitle = document.getElementById('survey-title').value
    const questions = []

    var containers = document.querySelectorAll('.que-container')
    containers.forEach(function(container){
        var questionText = container.querySelector('.question-input').value
        var options = []

        var optionInputs = container.querySelectorAll('.option-input')
        optionInputs.forEach(function(option){
            options.push(option.value)
        })  
        questions.push({
                question: questionText,
                options: options 

        })
    })
     var surveyData = {
            tittle: surveyTitle,
            question: questions
    }
    console.log(surveyData) 
    localStorage.setItem('surveyData', JSON.stringify(surveyData));     

} 
 
