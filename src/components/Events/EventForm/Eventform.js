import React, { useState } from "react";
import DatePicker from 'react-datepicker/dist/react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


export default function EventForm(){
    const [image , setimage] = useState(null);

    const handleChange = (event) => {
      
         setimage(URL.createObjectURL(event.target.files[0]))
         
      }
       
            const [startDate, setStartDate] = useState(null);
            const showCalendar = () => setStartDate();

    
    
    return(
        <>        
               <div className="card p-5">
                   <div className="row justify-content-between">

                       <div className="m-2">
                           <h5 className="text-muted">Create Event</h5>
                       </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
                                <label for="exampleFormControlInput1" className="m-1">Name of event</label> 
                                       <input className="form-control " placeholder="Event Name" id="exampleFormControlInput1" type="text"/>
                        </div>


                        <div className="form-group mt-4 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <label for="exampleFormControlInput1" className="m-1">Date of event</label> 
                                <DatePicker selected ={startDate} onChange={ (Date) => setStartDate(Date)}
                                className="form-control" id="exampleFormControlInput1"
                                />        
                        </div>

                        <div className="form-group mt-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <label for="exampleFormControlInput1" className="m-1">Organiser</label>
                            <input className="form-control" placeholder="Organiser's Name" id="exampleFormControlInput1" type="text" />
                        </div>

                        <div className="form-group mt-2 col-12">
                           <label for="exampleFormControlTextarea1" className="m-1">Description</label>
                           <textarea className="form-control" placeholder="Write a description of the event" id="exampleFormControlTextarea1" rows="5"></textarea>   
                       </div>

                       
                       <div className=" mt-2">
                           <input className="form-control" type="file" onChange={handleChange} />     
                       </div>

                       <div className="row mt-3 justify-content-center">
                           {
                               image? (
                                    <div className="col-6">
                                         <img src={image} className="w-100 h-100 "></img>
                                    </div>
                               ) : (
                                   null
                               )
                           }
                          
                       </div>
                      
                    </div>

                     
                    <div className="row m-2 justify-content-center">
                         <button type="button" className="btn btn-primary w-auto">Submit</button>
                      </div>

                 </div>   


        </>
    )
}