import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
export default function login(){
    return(
        <div className="login-container row align-items-center text-center">
            <center>
                <div className="col-lg-4 card align-self-center ">
                    <div className="row login-heading p-2 align-items-center">
                        <h3 className=" col ">Admin Login</h3>
                    </div>
                    <div className="row p-5 text-dark">
                        <div className="Col-12 ">
                           <input type="text" className="form-control" placeholder="Email-Address" />
                        </div>
                        <div className="Col-12 mt-4">
                           <input type="password" className="form-control" placeholder="Password"  />
                        </div>
                        <div className="Col-12 mt-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Role</option>
                                <option defaultValue="1">Super Admin</option>
                            </select>
                        </div>
                        <div className="Col-12 mt-4">
                            <Link to="/dash-board">
                                <button type="button" className="btn btn-primary">Login</button>
                            </Link>
                        </div>
                        
                    </div>

                        
                </div>
            </center>
           
        </div>
        
    )
}