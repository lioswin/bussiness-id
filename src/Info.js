import React from "react"
import About from "./About";
import myImage from './resources/ega.jpeg'
function Info(){
    return (
        <div>
        <img src={myImage} alt="profile" className="image"/>
        <div className="grey">
        <div className="container-name">
        <h1>Tony Nemes Rite</h1>
        <h4>Frontend developer</h4>
        <h6><a href ="">lioswin.website</a></h6>
        </div> 
        <div>
            <button className="button E">
            <span><i className="fa fa-envelope"></i></span>Email</button>
            <button className="button L">
            <span><i className="fa fa-linkedin"></i></span>LinkedIn</button>
        </div>
        <About/>
        </div>
        
        </div>

    )
}

export default Info;