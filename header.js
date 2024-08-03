export function renderHeader(){
    const headerTemplate = `
    <header>
       <div class="left-div">
            <h1>Survey</h1>
       </div>
       <div class="center-div">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Templates</a></li>
                <li><a href="">Share</a></li>
                <li><a href="">About Us</a></li>
            </ul>
       </div>
        <div class="right-div">
            <button>login in</button>
            <button>Sign up</button>
        </div>
    </header>`
    document.getElementById('header-container').innerHTML += headerTemplate
}