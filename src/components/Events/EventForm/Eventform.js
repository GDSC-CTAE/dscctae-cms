import React, { useState, useRef } from "react";
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { EventInfo } from "../EventData/eventdata";
import './Eventform.css'
import axios from 'react'


export default function EventForm(){
    const [image , setimage] = useState(null);

    const handleChange = (event) => {
      
         setimage(URL.createObjectURL(event.target.files[0]))
         
      }
          
    const [startDate, setStartDate] = useState(null);
    const showCalendar = () => setStartDate();


    function handleinput(e){ 
        console.log(e.target.value)
    }

    const eventref = useRef([])

    // const eventdatahandle = () => {

    //     axios
    //     .post("http://localhost:3000/newevent", 
    //              EventInfo
    //          )
    //     .then((res) => {
    //         console.log(res);
            
    //       });
         
    // }
    
    
    return(
        <>        
               <div className="card p-5">
                   <div className="row justify-content-between">

                       <div className="m-2">
                           <h5 className="text-muted">Create Event</h5>
                       </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                                <label for="exampleFormControlInput1" className="m-1">Name of event</label> 
                                       <input ref={eventref} onChange={ (e) => handleinput(e)}  className="form-control " placeholder="Event Name" id="exampleFormControlInput1" type="text"/>
                        </div>


                        <div className="form-group mt-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <label for="exampleFormControlInput1" className="m-1">Date of event</label> 
                                <DatePicker selected ={startDate} onChange={ (Date) => setStartDate(Date)}
                                ref={eventref}
                                className="form-control" id="exampleFormControlInput1"
                                />        
                        </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <label for="exampleFormControlInput1" className="m-1">Organiser</label>
                            <input ref={eventref} className="form-control" onChange={ (e) => handleinput(e)} placeholder="Organiser's Name" id="exampleFormControlInput1" type="text" />
                        </div>

                        <div className="form-group mt-2 col-12">
                           <label for="exampleFormControlTextarea1" className="m-1">Description</label>
                           <textarea ref={eventref} className="form-control" onChange={ (e) => handleinput(e)} placeholder="Write a description of the event" id="exampleFormControlTextarea1" rows="5"></textarea>   
                       </div>
          

                       <div className="row mt-3 ">

                            <div className="mt-2 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <label>Upload picture</label>
                                <input className="form-control mt-2" type="file" onChange={handleChange} />     
                            </div>

                           {
                               image? (
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                         <img src={image} className="image-width"></img>
                                    </div>
                               ) : (
                                   null
                               )
                           }
                          
                       </div>
                      
                    </div>

                     
                    <div className="row m-2 justify-content-center">
                         <button 
                        //  onClick={eventdatahandle}
                          type="button" className="btn btn-primary w-auto">Submit</button>
                      </div>

                 </div>   


        </>
    )
}