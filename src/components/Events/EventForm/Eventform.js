import React, { useState, useRef } from "react";
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import './Eventform.css'
import { EventHandler } from "./EventHandler";
import Loading from "../../Team-Members/Add-Team-Members/Loading";


export default function EventForm(){
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState();
    const [photoUrl, setPhotoUrl] = useState("");
    const dataRefs = useRef([]);

    const addToRefs = (input) => {
        if(input && !dataRefs.current.includes(input) ) {
            dataRefs.current.push(input);
        }
    }

    const handleChange = (event) => {
        setFile(event.target.files[0])      
    }
          
    const [date, setStartDate] = useState(null);    
    
    return(
        <>        
               <div className="card p-5">
               {loading && <Loading message={"Adding Event.... Please Wait"} />}
                   <div className="row justify-content-between">
                 
                       <div className="m-2">
                           <h5 className="text-muted">Create Event</h5>
                       </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                                <label for="exampleFormControlInput1" className="m-1">Name of event</label> 
                                       <input ref={addToRefs}  className="form-control " placeholder="Event Name" id="nameofevent" type="text"/>
                        </div>


                        <div className="form-group mt-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <label for="exampleFormControlInput1" className="m-1">Date of event</label> 
                                <DatePicker selected ={date} 
                                onChange={ (e) => setStartDate(e)}
                                dateFormat="dd/MM/yyyy"
                                className="form-control" id="dateofevent"
                                ref={addToRefs} 
                                />        
                        </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <label for="exampleFormControlInput1" className="m-1">Organiser</label>
                            <input className="form-control" ref={addToRefs}  placeholder="Organiser's Name" id="organiser" type="text" />
                        </div>

                        <div className="form-group col-12 mt-4">
                           <label for="exampleFormControlTextarea1" className="m-1">Description</label>
                           <textarea className="form-control " ref={addToRefs}  placeholder="Write a description of the event" id="description" rows="5"></textarea>   
                       </div>
          

                       <div className="row ">

                            <div className="mt-4 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <label htmlFor="photo" className="m-1">Upload picture</label>
                                <input className="form-control mt-1" type='file' accept='.jpg, .png, .jpeg' id="photo"  ref={addToRefs} onChange={handleChange} />     
                            </div>

                           {
                               file? (
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                         <img src={URL.createObjectURL(file)}  className="image-width"></img>
                                    </div>
                               ) : (
                                   null
                               )
                           }
                          
                       </div>
                      
                    </div>

                     
                    <div className="row mt-5 justify-content-center">
                         <button 
                         onClick={ () => EventHandler(file, dataRefs, setLoading, setPhotoUrl)}
                          type="button" className="btn btn-primary w-auto">Submit</button>
                      </div>

                 </div>   


        </>
    )
}