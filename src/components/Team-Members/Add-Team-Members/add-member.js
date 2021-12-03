import React , {useState} from "react";
import './add-member.css'

 
export default function AddTeamMember(){
    const [file,setFile] = useState([]);
    const [hasFile,setHasFile] = useState(false);

    const handleChange=(e)=>{
        setFile( URL.createObjectURL(e.target.files[0]))
        setHasFile(true);
    }
    
    return(
        <div className="card p-5">
            <div >
                <h5 className="text-muted">Add Team Member</h5>
            </div>
            <br />
            <div className="row justify-content-between ">
                    <div className="col-lg-4 mt-3">
                        <label for="emailaddress">Member Name</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Name" />
                    </div>
                    
                    <div className="col-lg-3 mt-3">
                        <label for="projectstatus">Select Year </label>
                        <select class="form-select mt-2" id="projectstatus" >
                            <option value="1">Web</option>
                            <option value="1">Android</option>
                            <option value="2">ML</option>
                        </select>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <label for="emailaddress">Branch</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Branch" />
                    </div>
                    <div className="col-lg-3 mt-3">
                        <label for="emailaddress">Linkedin Url</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Url" />
                    </div>
                    <div className="col-lg-3 mt-3">
                        <label for="emailaddress">Github Url</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Url" />
                    </div>
                    <div className="col-lg-3 mt-3">
                        <label for="emailaddress">Instagram Url</label>
                        <input className="form-control mt-2" id="emailaddress" type="text" placeholder="Enter Url" />
                    </div>
                    <div className="col-lg-2 mt-3">
                        <label for="projectstatus">Select Role </label>
                        <select class="form-select mt-2" id="projectstatus" >
                            <option value="1">Lead</option>
                            <option value="1">Web Lead</option>
                            <option value="2">ML</option>
                        </select>
                    </div>
                    <div className="mt-3 col-lg-4">
                        <label for="memberphoto" >Upload member's photo</label>
                        <input type="file" className="form-control mt-2" onChange={handleChange} />
                    </div>
                    <div className="mt-5 col-lg-7 ">
                        {hasFile ? (
                            <div className="member-image-container">
                                <img src={file} alt={file} className="member-image h-100 4" />
                            </div>
                            
                        ):
                        <h4 >Please select a photo</h4>}
                        
                    </div>
                    
            </div>
            <div className="row text-center mt-5 justify-content-center">
                    <button type="button" class="btn create-project-button">Add </button>
            </div>
        </div>
    )
}