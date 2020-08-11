import React from 'react';
import './cardstyles.css'
const projects = ["This Site", "Tlaxcala Bakery", "FortNite Item Shop"]
const description =[
    "My portfolio website was built using React and styled with Bootstrap.",
    "I was contracted to do a local business website. I used React and styled it with Bootstrap.",
    "The FortNite Item Shop is a project I started after learning how to use API's."
    ]
function ReactJS (){

    return(
        <div className ="container-fluid">
            <div className="container-img">
                <div className ="row">
                    {projects.map((project, index) =>{
return(
    <div className="card">
        <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" className="card-img-top" alt="ReactJS"/>
        <div className="card-body">
            <h5 className="card-title">{project}</h5>
            <p className="card-text">{description[index]}</p>
            {/* <a href="#" className="btn btn-primary ">Github Repo</a> */}
        </div>
    </div>
)
                    })}

            </div>
        </div>
        </div>
            )
}

export default ReactJS;
