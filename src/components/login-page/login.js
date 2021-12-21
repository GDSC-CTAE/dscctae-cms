import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { SignIn, useAuth } from "../../../src/components/Helper/firebase";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const [errmsg, setErrMsg] = useState(" ");
  const navigate = useNavigate();
     
    function handleSignUp(){
        const userEmail = emailRef.current.value;
        const userPassword = passwordRef.current.value;
        const userRole = roleRef.current.value;
        if(userEmail && userPassword && userRole){
            setErrMsg("")
            try{
                SignIn(userEmail,userPassword,userRole);
                navigate('/dash-board');
            }
            catch(error){
                alert("issue on click of signup")
                console.log(error);
            }
        }else if( !userEmail && userPassword ){
            setErrMsg("Please Enter your Email Address ");
        }else if(userEmail && !userPassword){
            setErrMsg("Please Enter your Password  ")
        }
        else{
            setErrMsg("Enter your Email Address and Password");
            console.log(errmsg)
        }
    }

  useEffect(() => {
    sessionStorage.removeItem("token");
  }, []);

  return (
    <div className="login-form-container row align-items-center text-center">
      <center>
        <div className="col-lg-4 col-md-6 col-sm-8 login-card align-self-center ">
          <div className="row login-heading p-2 align-items-center">
            <h3 className=" col text-white">Admin Login</h3>
          </div>
          <div className="p-2">
            <h6 className="text-danger mt-3">{errmsg}</h6>
          </div>
          <div className="row text-dark login-container">
            <div className="Col-12 ">
              <input ref={emailRef} type="text" className="form-control" placeholder="Email-Address" />
            </div>
            <div className="Col-12 mt-4">
              <input ref={passwordRef} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="Col-12 mt-4">
              <select ref={roleRef} className="form-control" aria-label="Default select example">
                <option defaultValue="0">Select Role</option>
                <option defaultValue="1">Super Admin</option>
              </select>
            </div>
            <div className="Col-12 mt-4">
              {/* <Link to="/dash-board"> */}
              <button type="button" className="btn btn-primary" onClick={handleSignUp}>
                Login
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
  }
