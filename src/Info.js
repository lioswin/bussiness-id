import React from "react"
import myImage from './resources/ega.jpeg'
import Interest from "./Interest";
function Info(){
    return (
        <div>
        <img src={myImage} alt="profile" className="image"/>
        <div className="grey">
        <div className="container-name">
        <h2>Tony Rite</h2>
        <h3>Frontend developer</h3>
        <h4>lioswin.website</h4>
        </div> 
        <div className="">
            <button className="btn2">
            <i className="fa fa-envelope"></i>Email</button>
            <button className="btn">
            <i className="fa fa-linkedin"></i>LinkedIn</button>
        </div>
        <Interest/>
        </div>
        
        </div>

    )
}

export default Info;