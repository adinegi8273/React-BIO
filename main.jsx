import {createRoot} from "react-dom/client"


function Header(){
    return (
        <>
            <header>
                <nav>
                    <img src="/src/react-logo.png" alt="React logo" />
                    <span>ReactStyle</span>
                    <ul className="list-items">
                        <li><a href="https://adinegi8273.github.io/AdityaNegi.github.io/">Portfolio</a></li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
        
    )
}
function MainContent(){
    return (
        <>
            <main>
                <h1>Hi! I'am Aditya Negi</h1>
                <ul className="bio-lists">
                    <li>I started learning react 2 weeks back from a platform named Scrimba</li>
                    <li>I just got into my third year</li>
                    <li>My second year of Btech C.S.E. was challenging</li>
                    <li>Past Year, I was able to find out my deepest strengths</li>
                    <li>This year i want to imrpove my Problem solving skills to the next level</li>
                    <li>Whenever you are in pain, confusion. Call Krishna!  <img src="/src/krishna.png" alt="Krihsna-logo"/></li>
                </ul>
            </main>
        </>
    )
}

function Footer(){
    return (
        <>
            <footer>
                <p>
                    Thank You for visiting! Connect with me! We will create good projects together. Made By Aditya Negi
                </p>
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/aditya-negi-053678297"><img src="/src/linkedin.png" alt="linked-in-logo" /></a>
                    <a href= "https://github.com/adinegi8273"><img src ="/src/github.png" alt="github-logo"/></a>
                </div>
            </footer>
        </>
    )
}



const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <MainContent />
        <br />
        <br />
        <br />
        <Footer />
    </>
    
)