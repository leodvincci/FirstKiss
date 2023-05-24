import React from "react";
import axios from "axios";
export default function RegistrationPage(){

    const [userReg, setUserReg] = React.useState({firstName:"",lastName:"",email:"",password:""})
    function handleClick(){
        axios.post('http://127.0.0.1:8000/api/v1/usersignup', {
            userReg
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

            <div className={"bg-red-500 h-screen flex flex-row justify-center items-center text-9xl w-1/2"}>
                <h1 >First Kiss</h1>
            </div>

            <div className={"bg-indigo-500 h-screen flex flex-col justify-center items-center text-2xl w-1/2"}>
                <h1 className={`text-white text-4xl m-8`}>Let's Get you signed up!</h1>
                <div className={`flex flex-col justify-between h-1/4`}>
                    <input onChange={handleForm}  id={"first_name"} className={"rounded-md"} type="text" placeholder={"first name"}/>
                    <input onChange={handleForm}  id={"last_name"} className={"rounded-md"}  type="text" placeholder={"last name"}/>
                    <input onChange={handleForm}  id={"email"} className={"rounded-md"}  type="text" placeholder={"email"}/>
                    <input onChange={handleForm}  id={"password"} className={"rounded-md"} type="password" placeholder={"password"}/>
                    <button onClick={handleClick} className="btn">Register</button>
                </div>

            </div>



        </div>
    )
}