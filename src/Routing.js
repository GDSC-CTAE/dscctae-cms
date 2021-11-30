import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/login-page/login";
import DashBoard from "./components/DashBoard/dashboard";
import Events from "./components/Events/events";
import CreateProject from "./components/Projects/create-project/create-project";
import ViewProjects from "./components/Projects/view-project/view-project";
import AddTeamMember from "./components/Team-Members/Add-Team-Members/add-member";
import ViewTeamMembers from "./components/Team-Members/View-Team-Members/view-members";
export default function Routing() {
  return (
    <div>
      <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} ></Route>
                    <Route exact path="/dash-board" element={<DashBoard />} >
                        <Route  path="" element={<Events />} />
                        <Route exact path="/dash-board/create-project" element={<CreateProject />} />
                        <Route exact path="/dash-board/view-all-project" element={<ViewProjects />} />
                        <Route exact path="/dash-board/view-all-team-members" element={<ViewTeamMembers />} />
                        <Route exact path="/dash-board/add-team-member" element={<AddTeamMember  />} />
                    </Route>
                    <Route exact path="/events" element={<Events/>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}
