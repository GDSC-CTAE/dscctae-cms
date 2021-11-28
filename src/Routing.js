import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/login-page/login";
import DashBoard from "./components/DashBoard/dashboard";
import Events from "./components/Events/events";
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/dash-board" element={<DashBoard />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
