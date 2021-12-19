import React, { useState, useRef } from "react";
import {db} from '../../Helper/firebase'
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { EventInfo } from "../EventData/eventdata";
import './Eventform.css'
import axios from 'react'


export default function EventForm(){
    const [image , setimage] = useState(null);
    const [event, setnameofevent] = useState("");
    const [organiser, setOrganiser] = useState("");
    const [description, setDescription] = useState("");
    const [loader, setLoader] = useState(false);

    const handleChange = (event) => {
         setimage(URL.createObjectURL(event.target.files[0]))       
    }
          
    const [date, setStartDate] = useState(null);

    function handlesubmit(e){ 
        e.preventDefault();

        db.collection('events').add({
            nameofevent : event,
            date : date,
            organiser : organiser,
            description: description,
            image : image
        })
        .then( () => {
            alert("Event Created!")
            setLoader(false)
        })
        .catch( err => {
            console.log(err)
            setLoader(false)
        })
        console.log(e.target.value)
    }

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
                                       <input onChange={ (e) => setnameofevent(e.target.value)} value={event} className="form-control " placeholder="Event Name" id="exampleFormControlInput1" type="text"/>
                        </div>


                        <div className="form-group mt-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <label for="exampleFormControlInput1" className="m-1">Date of event</label> 
                                <DatePicker selected ={date} value={date} 
                                onChange={ (e) => setStartDate(e)}
                                dateFormat="dd/MM/yyyy"
                                className="form-control" id="exampleFormControlInput1"
                                />        
                        </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <label for="exampleFormControlInput1" className="m-1">Organiser</label>
                            <input className="form-control" value={organiser} onChange={ (e) => setOrganiser(e.target.value)} placeholder="Organiser's Name" id="exampleFormControlInput1" type="text" />
                        </div>

                        <div className="form-group mt-2 col-12">
                           <label for="exampleFormControlTextarea1" className="m-1">Description</label>
                           <textarea className="form-control" value={description} onChange={ (e) => setDescription(e.target.value)} placeholder="Write a description of the event" id="exampleFormControlTextarea1" rows="5"></textarea>   
                       </div>
          

                       <div className="row mt-3">

                            <div className="mt-2 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <label>Upload picture</label>
                                <input className="form-control mt-2" type="file" onChange={handleChange} />     
                            </div>

                           {
                               image? (
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                         <img src={image} value={image} onChange={ (e) => setimage(e.target.value) } className="image-width"></img>
                                    </div>
                               ) : (
                                   null
                               )
                           }
                          
                       </div>
                      
                    </div>

                     
                    <div className="row m-2 justify-content-center">
                         <button 
                         onClick={handlesubmit}
                          type="button" className="btn btn-primary w-auto">Submit</button>
                      </div>

                 </div>   


        </>
    )
}