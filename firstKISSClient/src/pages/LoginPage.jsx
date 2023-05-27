import fk from "../assets/img.png"
import logo from "../assets/img_1.png"
import React from "react";
export default function LoginPage(){

    const [userData, setUserData] = React.useState({email:"","password":""})
    console.log(userData)
    function handleForm(e){

        setUserData( prevState => {
            return(
                {...prevState, [e.target.name]:e.target.value}
            )
        } )
    }

    return(
        <div className={"flex flex-row w-screen h-screen"}>

            <div className={"bg-indigo-500 w-auto h-auto flex flex-col justify-end"}>
                <img  src={fk} alt="" width={"80%"}/>
            </div>

            <div className={"bg-red-400 w-full h-full "}>
                <div className={"h-full w-full flex flex-col items-center justify-center"}>
                    <img src={logo} alt="" width={"30%"}/>
                    <input onChange={handleForm} name={"email"} className={"m-2 p-2 rounded-md"} type="text" placeholder={"email"}/>
                    <input onChange={handleForm} name={"password"} className={"m-2 p-2 rounded-md"} type="password" placeholder={"password"}/>
                    <div className={"m-5"}>
                        <button onClick={handleForm} className="btn">login</button>
                    </div>

                </div>

            </div>

        </div>
    )
}