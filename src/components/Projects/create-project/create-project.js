import React ,{useState} from "react";
import './create-project.css'
import * as AiIcons from "react-icons/ai";


export default function CreateProject(){
    const arr=[];
    const [contName,setContName] = useState([]);
    const [has,setHas] = useState(false);
    const onAddContibuterName = () =>{
        setContName([...contName, 

            {
                name:'tiwari'
            }
        ])
        console.log(contName);
        setHas(true)
    }

    return(
        <div className="create-project-container">
            <div className="card p-5 ">
                <div >
                    <h5 className="text-muted">Create New Project</h5>
                </div>
                <br />
                <br />
                <div className="row justify-content-between ">
                    <div className="col-lg-3">
                        <label htmlFor="emailaddress">Project Name</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Name" />
                    </div>
                    <div className="col-lg-2">
                        <label htmlFor="projectstatus">Project Status</label>
                        <select className="form-select mt-2" id="projectstatus" >
                            <option value="1">Ongoing</option>
                            <option value="1">Complete</option>
                            <option value="2">About to Start</option>
                        </select>
                    </div>
                    <div className="col-lg-2">
                        <label htmlFor="projectstatus">Project Domain</label>
                        <select className="form-select mt-2" id="projectstatus" >
                            <option value="1">Web</option>
                            <option value="1">Android</option>
                            <option value="2">ML</option>
                        </select>
                    </div>
                    <div className="col-lg-3 ">
                        <label htmlFor="githuburl">Github Url</label>
                        <input className="form-control mt-2" id="githuburl" type="text" placeholder="Enter Url" />
                    </div>
                    <div className="col-lg-12 ">
                        <label htmlFor="aboutproject">About Project</label>
                        <textarea className="form-control mt-2" id="aboutproject" type="text" placeholder="Enter Details" />
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="aboutproject" className="mt-4">Add Contributors</label>
                        <div className="input-group  mt-2">
                            <input className="form-control " id="emailaddress" type="text" placeholder="Enter Contributor" />
                            <button type="button" 
                                    className="input-group-text btn primary-button"
                                    onClick={onAddContibuterName}
                            >Add</button>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="row mt-2  ">
                       {contName.map((val,index)=>{
                            return(
                                <div className="chips rounded-pill col-2 m-1" key={index}>
                                    <span className="chip-text">{val.name}</span><AiIcons.AiOutlineClose className="close-bars mb-1" />
                                </div>
                            )
                        })}

                       
                     
                   
                </div>

                <div className="row text-center mt-5 justify-content-center">
                    <button type="button" className="btn primary-button">Create</button>
                </div>
            </div>
        </div>
    )
}