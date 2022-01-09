
import React from 'react'

export const Pagination = ({eventsPerPage, totalEvents, paginate}) => {

    const pageNumbers = [];
    for(let i =1; i<= Math.ceil(totalEvents/eventsPerPage) ; i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    console.log(eventsPerPage)
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map( (number,index) => (
                    <li key={index} className='page-item'>
                        <a onClick={()=>  paginate(index+1) }   className='page-link'>
                        {number}
                        </a>
                    </li>
                ) )}
               
            </ul>
        </nav>
    )
}
