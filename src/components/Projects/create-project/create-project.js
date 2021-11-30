import React from "react";
import './create-project.css'
import * as AiIcons from "react-icons/ai";

export default function CreateProject(){
    return(
        <div className="create-project-container">
            <div className="card p-5 ">
                <div >
                    <h5 className="text-muted">Create New Project</h5>
                </div>
                {/* <hr className="mt-4" /> */}
                <br />
                <br />
                <div className="row justify-content-between ">
                    <div className="col-lg-4">
                        <label for="emailaddress">Project Name</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Name" />
                    </div>
                    <div className="col-lg-3">
                        <label for="projectstatus">Project Status</label>
                        <select class="form-select mt-2" id="projectstatus" >
                            <option value="1">Ongoing</option>
                            <option value="1">Complete</option>
                            <option value="2">About to Start</option>
                        </select>
                    </div>
                    <div className="col-lg-4 ">
                        <label for="githuburl">Github Url</label>
                        <input className="form-control mt-2" id="githuburl" type="text" placeholder="Enter Url" />
                    </div>
                    <div className="col-lg-12 mt-4">
                        <label for="aboutproject">About Project</label>
                        <textarea className="form-control mt-2" id="aboutproject" type="text" placeholder="Enter Details" />
                    </div>
                    <div className="col-lg-12 mt-4">
                        <label for="aboutproject">Add Contributors</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Contributor" />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="chips rounded-pill m-2 ">
                        <span className="chip-text">Sheetal </span><AiIcons.AiOutlineClose className="close-bars mb-1" />
                    </div>
                    <div className="chips rounded-pill m-2 ">
                        <span className="chip-text">Sheetal </span><AiIcons.AiOutlineClose className="close-bars mb-1" />
                    </div>
                </div>

                <div className="row text-center mt-5 justify-content-center">
                    <button type="button" class="btn create-project-button">Create</button>
                </div>
            </div>
        </div>
    )
}