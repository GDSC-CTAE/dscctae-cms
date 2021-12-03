import React , {useState} from "react";
import './view-members.css';
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import {TeamData} from './../../Data/team-member-data';
// pagination={paginationFactory({ sizePerPage: 5 })}
export default function ViewTeamMembers(){
    const [query, setQuery] = useState("")
    return(
        <>
        <div className="row mt-1 w-100 justify-content-between">
            <div className="col-lg-3 mt-2">
                <input className="form-control" placeholder="Search by Name" onChange={e=>setQuery(e.target.value)} />
            </div>
            <div className="col-lg-6 align-self-end mt-2 ">
                <Link to="/dash-board/add-team-member">
                    <button className="btn primary-button add-member">Add Member</button>
                </Link>
            </div>
            
        </div>
        <br />
        <div className="table-container p-0">
            <table  >
                <thead className="table-header">
                    <tr>
                        <th> Name</th>
                        <th>Role</th>
                        <th>Branch</th>
                        <th>Year</th>
                        <th>Linkedin Id</th>
                        <th>Github Id</th>
                        <th>Intagram Id</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {TeamData.filter(post =>{
                        if(query === ''){
                            return post;
                        }else if (post.name?.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((val,index)=> {
                        return(
                            <tr key={index}>
                               <td>{val.name}</td>
                               <td>{val.role}</td>
                               <td>{val.branch}</td>
                               <td>{val.year}</td>
                               <td><a href={val.linkedin}>Link</a></td>
                               <td><a href={val.github}>Link</a></td>
                               <td><a href={val.instagram}>Link</a></td>
                               <td><span className="fs-4 edit-button">{val.editIcon}</span></td>
                               <td><span className="fs-4 delete-button">{val.deleteIcon}</span></td>
                            </tr>
                        )
                        
                    })}
                {/* <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><MdIcons.MdModeEditOutline className="fs-3 edit-button" /></td>
                    <td><MdIcons.MdDelete className="fs-3 delete-button" /></td>
                </tr> */}
                {/* <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><MdIcons.MdModeEditOutline className="fs-3 edit-button" /></td>
                    <td><MdIcons.MdDelete className="fs-3 delete-button" /></td>
                </tr> */}
                {/* <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><MdIcons.MdModeEditOutline className="fs-3 edit-button" /></td>
                    <td><MdIcons.MdDelete className="fs-3 delete-button" /></td>
                </tr> */}
                {/* <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><MdIcons.MdModeEditOutline className="fs-3 edit-button" /></td>
                    <td><MdIcons.MdDelete className="fs-3 delete-button" /></td>
                </tr> */}
                </tbody>
            </table>
        </div>
        </>
    )
}