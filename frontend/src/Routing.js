import {  Route,  BrowserRouter ,Routes  } from 'react-router-dom'
import Login from './login-page/login'
import DashBoard from './DashBoard/dashboard'
export default function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} ></Route>
                    <Route exact path="/dash-board" element={<DashBoard />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}