import './style.css'
import { renderHeader } from "./header.js";
import { renderLandingPage } from "./landingPage.js";
import { renderForm } from "./surveyForm.js";



renderHeader()
renderLandingPage() 




document.getElementById('create-form').addEventListener('click', function(){     
    renderForm() 
})  


