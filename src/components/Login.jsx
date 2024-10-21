import "./Login.css";
import userDataContext from "../utils/userDataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Login(){
    let setUserData=useContext(userDataContext).setUserData;
    function handleClick(){
        fetch("http://localhost:5100/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userName:document.querySelector("#userNameLogin").value.trim(),
                password:document.querySelector("#passwordLogin").value.trim()
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.loginStatus){
                document.querySelectorAll("#login > div > div")[1].innerHTML="Login Successfull";
                document.querySelectorAll("#login > div > div")[1].style.background="rgb(126, 238, 151)";
                document.querySelectorAll("#login > div > div")[1].style.display="block";
                setTimeout(()=>{
                    document.querySelectorAll("#login > div > div")[1].style.display="none";
                },2000)
                setUserData(res.token+" "+res.userName + " " + res.channelCreated);
            }else{
                document.querySelectorAll("#login > div > div")[1].innerHTML="Login Unsuccessfull";
                document.querySelectorAll("#login > div > div")[1].style.background="rgb(238, 152, 126)";
                document.querySelectorAll("#login > div > div")[1].style.display="block";
                setTimeout(()=>{
                    document.querySelectorAll("#login > div > div")[1].style.display="none";
                },2000)
            }
            
        });
    }
    return(
        <main id="loginBody">
            <section id="login">
                    <div>
                        <h1>Login</h1>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>User Name:</td>
                                        <td><input id="userNameLogin"/></td>
                                    </tr>
                                    <tr>
                                        <td>Password:</td>
                                        <td><input id="passwordLogin" type="password"/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <button onClick={handleClick}>Login</button>
                            </div>
                        </div>
                        <div></div>
                        <div>
                                Do not have an account?<Link to="/register">Register here</Link>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default Login;