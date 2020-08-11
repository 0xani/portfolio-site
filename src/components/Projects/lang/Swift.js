import React from 'react';

const projects = ["Pandemic Counter"]
function Swift (){
    return(
        <div className ="container-fluid">
            <div className="container-img">
                <div className ="row">
                    {projects.map((project, index) =>{
                        return(
                            <div className="card">
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{project}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>

    )
}

export default Swift;
