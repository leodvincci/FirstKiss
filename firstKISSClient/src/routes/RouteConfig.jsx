import {Route, Routes} from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

export default function RouteConfig(){
    return(
        <Routes>
            <Route path={"/register"} element={<RegistrationPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>

    )
}