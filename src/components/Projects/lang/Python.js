import React from 'react';

const projects = ["Simple MP3"]
const links = ["https://github.com/jtorresuci/simple-mp3"]

function Python (){
    return(
        <div className ="container-fluid">
            <div className="container-img">
                <div className ="row">
                    {projects.map((project, index) =>{
                        return(
                            <div className="card">
                                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{project}</h5>
                                    <p className="card-text">Low resource application to play music. Helps conserve battery and RAM.</p>
                                    <a href="https://github.com/jtorresuci/simple-mp3" className="btn btn-primary">Github Repo</a>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Python;
