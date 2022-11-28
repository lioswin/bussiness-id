import React from "react"
import myImage from './resources/ega.jpeg'
function Info(){
    return (
        <div>
        <img src={myImage} alt="profile" width="500px" height="500px"className="image"/>
        <div className="container-name">
        <h2>Tony Rite</h2>
        <h3>Frontend developer</h3>
        <h4>lioswin.website</h4>
        </div> 
        <div className="btn">
            <button className="">
            <i className="fa fa-envelope"></i>Email</button>
            <button className="">
            <i class='fa fa-linkedin'></i>LinkedIn</button>
        </div>
        
        </div>
    )
}

export default Info;