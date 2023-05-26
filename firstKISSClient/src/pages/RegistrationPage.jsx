import React from "react";
import axios from "axios";
import fk from "../assets/fk.png"
export default function RegistrationPage(){

    const [userReg, setUserReg] = React.useState({first_name:"",last_name:"",email:"",password:""})
    function handleClick(){
        axios.post('http://127.0.0.1:8000/api/v1/usersignup', {
            ...userReg
        })
            .then(function (response) {
                console.log(response);
                console.log(userReg);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleForm(e){
        setUserReg( prevState => {
            return(
                {...prevState, [e.target.id]:e.target.value}
            )
        } )
    }

    return(
        <div className={"flex flex-row"}>

            <div className={"bg-red-400 h-screen flex flex-row justify-center items-center text-9xl w-1/2"}>
                <img className={"ml-[80px] mb-9"} src={fk} alt="people hugging" width={"700px"} height={"800px"}/>
            </div>

            <div className={"bg-indigo-500 h-screen flex flex-col justify-center items-center text-2xl w-1/2"}>
                <h1 className={`text-white text-4xl m-8`}>Hey! Let's get you signed up...</h1>
                <div className={`flex flex-col justify-between h-1/4`}>
                    <input onChange={handleForm}  id={"first_name"} className={"rounded-md p-3 m-2"} type="text" placeholder={"first name"}/>
                    <input onChange={handleForm}  id={"last_name"} className={"rounded-md p-3 m-2"}  type="text" placeholder={"last name"}/>
                    <input onChange={handleForm}  id={"email"} className={"rounded-md p-3 m-2"}  type="email" placeholder={"email"}/>
                    <input onChange={handleForm}  id={"password"} className={"rounded-md p-3 m-2"} type="password" placeholder={"password"}/>
                </div>
                <button onClick={handleClick} className="btn m-[90px]">Register</button>


            </div>



        </div>
    )
}