import fk from "../assets/img.png"
export default function LoginPage(){
    return(
        <div className={"flex flex-row w-screen h-screen"}>

            <div className={"bg-indigo-500 w-full h-full"}>
                <img className={"mt-[250px]"} src={fk} alt="" width={"800px"}/>
            </div>

            <div className={"bg-red-400 w-full h-full "}>
                <div className={"h-full w-full flex flex-col items-center justify-center"}>
                    <h1>Login</h1>
                    <input className={"m-2"} type="text"/>
                    <input type="password"/>
                </div>

            </div>

        </div>
    )
}