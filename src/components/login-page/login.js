import React , {useRef} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import {signIn,useAuth} from '../../../src/firebase';
export default function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignUp(){
        try{
            await signIn(emailRef.current.value,passwordRef.current.value)
        }
        catch(error){
            console.log(error);
            
        }
    }
    return(
        <div className="login-container row align-items-center text-center">
            <center>
                <div className="col-lg-4 login-card align-self-center ">
                    <div className="row login-heading p-2 align-items-center">
                        <h3 className=" col text-white">Admin Login</h3>
                    </div>
                    <div className="row p-5 text-dark">
                        <div className="Col-12 ">
                           <input ref={emailRef} type="text" className="form-control" placeholder="Email-Address" />
                        </div>
                        <div className="Col-12 mt-4">
                           <input ref={passwordRef} type="password" className="form-control" placeholder="Password"  />
                        </div>
                        <div className="Col-12 mt-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Role</option>
                                <option defaultValue="1">Super Admin</option>
                            </select>
                        </div>
                        <div className="Col-12 mt-4">
                            <Link to="/dash-board">
                                <button type="button" className="btn btn-primary" onClick={handleSignUp}>Login</button>
                            </Link>
                        </div>
                        
                    </div>

                        
                </div>
            </center>
           
        </div>
        
    )
}