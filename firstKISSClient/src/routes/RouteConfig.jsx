import {Route, Routes} from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage.jsx";

export default function RouteConfig(){
    return(
        <Routes>
            <Route path={"/register"} element={<RegistrationPage/>}/>
        </Routes>

    )
}