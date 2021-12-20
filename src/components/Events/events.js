import React, {useEffect} from "react"
import Eventform from "./EventForm/Eventform.js";
import { EventInfo } from "./EventData/eventdata.js";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { setDefaultLocale } from "react-datepicker";
//import ReactPaginate from 'react-Paginate'

export default function Events(){

    const [searchquery, setSearchQuery] = useState("")
    //const [pageCount, setPageCount] = useState(0);
    const [event, setEventData] = useState([]);

    // useEffect(() => {
    //     const FetchEvent= async () => {

    //         const event = FetchEvent();
            
    //         if(event){
    //             setEventData(event)
    //         }
    //     };
    //     FetchEvent();
    // }, [])

    return(
        <>
            <div>
                        <div className="p-2 m-2 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-5">
                                <input onChange={ e => setSearchQuery(e.target.value) } className="form-control" placeholder="Search by event name"></input>
                        </div>

                 {/* {event?.filter( (post)=> {
                       if(searchquery == "")
                       return post
                       else if(post.nameofevent?.includes(searchquery))
                       return post;
                     }
                     
                    )
                    } */}
                        
                
                {EventInfo .filter( (post)=> {
                    if(searchquery == "")
                    return post
                    else if(post.nameofevent?.toLowerCase().includes(searchquery.toLowerCase()))
                    return post;
                  })
                
                .map( (val, index) => {
                    return(
                        <center>           

                        <div className="card p-2 m-3 " >
                           
                            <div className="row align-items-center" key={index} >
                               <div className="p-2 text-start col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                    <h3> {val.nameofevent} </h3>
                                    <h4 className="text-muted"> {val.organiser} </h4>
                                    <h6> {val.dateofevent} </h6>
                                </div>

                            <div className="p-2 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                 <Link to="/Eventform" className="m-2 btn btn-primary">View event</Link>
                                 <Link to="/Eventform" className="m-2 btn btn-primary">Edit event</Link>
                            </div>

                            </div>
                           
                        </div>

                        {/* <ReactPaginate
                             breakLabel="..."
                             nextLabel="next >"
                             onPageChange={handlePageClick}
                             pageRangeDisplayed={5}
                             pageCount={pageCount}
                             previousLabel="< previous"
                             renderOnZeroPageCount={null}>
                        </ReactPaginate> */}

                        </center>
                    )
                 })
                 

                }
            </div>

   

        </>
    )
}
