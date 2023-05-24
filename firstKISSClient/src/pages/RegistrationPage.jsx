
export default function RegistrationPage(){
    return(
        <div className={"flex flex-row"}>

            <div className={"bg-red-500 h-screen flex flex-row justify-center items-center text-9xl w-1/2"}>
                <h1 >First Kiss</h1>
            </div>

            <div className={"bg-indigo-500 h-screen flex flex-col justify-center items-center text-9xl w-1/2"}>
                <h1 >Let's Get you signed up!</h1>
                <button className="btn">Register</button>
            </div>



        </div>
    )
}