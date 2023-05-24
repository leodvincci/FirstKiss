import fk from "../assets/img.png"
import logo from "../assets/img_1.png"
export default function LoginPage(){
    return(
        <div className={"flex flex-row w-screen h-screen"}>

            <div className={"bg-indigo-500 w-auto h-auto flex flex-col justify-end"}>
                <img  src={fk} alt="" width={"80%"}/>
            </div>

            <div className={"bg-red-400 w-full h-full "}>
                <div className={"h-full w-full flex flex-col items-center justify-center"}>
                    <img src={logo} alt="" width={"30%"}/>
                    <input className={"m-2 p-2 rounded-md"} type="text" placeholder={"email"}/>
                    <input className={"m-2 p-2 rounded-md"} type="password" placeholder={"password"}/>
                    <div className={"m-5"}>
                        <button className="btn">login</button>
                    </div>

                </div>

            </div>

        </div>
    )
}