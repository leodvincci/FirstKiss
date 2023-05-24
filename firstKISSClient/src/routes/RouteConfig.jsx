import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";

export default function RouteConfig(){
    return(
        <Routes>
            <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>

    )
}