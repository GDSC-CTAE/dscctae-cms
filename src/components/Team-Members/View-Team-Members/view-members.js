import React from "react";
import './view-members.css';

export default function ViewTeamMembers(){
    return(
        <>
        <div className="row mt-2">
            <button className="btn primary-button add-member">Add Member</button>
        </div>
        <br />
        <div className="table-container p-0">
            <table>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                </tr>
                <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Sheetal</td>
                    <td>Web Lead</td>
                    <td>Computer Science and Engineering</td>
                    <td>3rd year</td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td><a href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/">Link</a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}