import React, {useEffect} from "react"
import {Link} from 'react-router-dom'
import { useState } from "react";
import { FetchEvents } from "./Handler.js";
import { Pagination } from "./Pagination.js";

export default function Events(){
 
    const [searchquery, setSearchQuery] = useState("")
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage] = useState(4)
    const indexOfLastEvent = currentPage * eventsPerPage
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
    const currentData = data.slice(indexOfFirstEvent, indexOfLastEvent)
    const paginate = (pageNumber) => {
  
      setCurrentPage(pageNumber)
    }
    useEffect(() => {
        const FetchEvent = async () => {
          try {
            setLoading(true);
            console.log("hello");
            const events = await FetchEvents();
            if (events) {
              setData(events);
            }
          } catch (err) {
            console.log(err, "Something went wrong!");
          }
          setLoading(false);
        };
        FetchEvent();
      }, []);

    return(
        <>

            <div>
                        <div className="p-2 m-2 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-5">
                                <input onChange={ e => setSearchQuery(e.target.value) } className="form-control" placeholder="Search by event name"></input>
                        </div>
                
                {currentData?.filter( (currentData)=> {
                    if(searchquery == "")
                    return currentData
                    else if(data.nameofevent?.toLowerCase().includes(searchquery.toLowerCase()))
                    return currentData
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
                                 <Link to="/ViewEvent" className="m-2 btn btn-primary">View event</Link>
                                 <Link to="/UpdateEvent" className="m-2 btn btn-primary">Edit event</Link>
                            </div>

                            </div>
                           
                        </div>
                          
                        </center>
                    )
                 })
                 

                }

                <Pagination eventsPerPage={eventsPerPage} totalEvents={data.length} paginate={paginate} ></Pagination>

                
            </div>

   

        </>
    )
}
