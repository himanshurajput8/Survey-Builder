export function renderLandingPage(){
    const landingPageTemlates = `
    <div class= "landing-container">
        <div class="inner-div">
            <h1>Free Online Survey</h1>
            <p>This is a versatile tool designed to streamline the creation, distribution,<br> and analysis of surveys. It empowers users to easily design custom surveys <br> with a user-friendly interface, </p>

            <button id="create-form">Create a Survey</button>
            <button>Existing servey</button>
            <p> Used by 50 million+ people around the world</p>
        </div>
        <div>
            <div><img src="image/landing-page-img.png"></div>
        </div>
    </div>`
    document.getElementById('main-container').innerHTML += landingPageTemlates 
    
} 