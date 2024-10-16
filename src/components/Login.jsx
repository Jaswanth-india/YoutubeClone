import "./Login.css";
import jwtTokenContext from "../utils/jwtTokenContext";
import { useContext } from "react";

function Login(){
    let setJwtToken=useContext(jwtTokenContext).setJwtToken;
    function handleClick(){
        fetch("http://localhost:5100/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userName:document.querySelector("#userNameLogin").value,
                password:document.querySelector("#passwordLogin").value
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
                setJwtToken(res.token);
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
                    </div>
            </section>
        </main>
    )
}

export default Login;