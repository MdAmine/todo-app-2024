import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function About() {
    const apiUrl="https://api.github.com/users/wessal2001";
    const [userInfo,setInfoUser]=useState({
        login:'',
        avatar_url:'',
        github_profile:''

    });
    const navigation=useNavigate();
    useEffect(() => {
        fetchUsers();
    }, []);
   async function fetchUsers() {
    try {
        const response = await fetch(apiUrl);
  
        if (!response.ok) throw Error("Error..");
  
        const data = await response.json();
        setInfoUser({
            login:data.login,
            avatar_url:data.avatar_url,
            github_profile:data.html_url
        }
        )
      } catch (error) {
        console.error("error")
      }}
    return (
<>
        <div className="container  text-white" >
            <h1 className="text-center">Application infos</h1>
            <p>This application is for a user to do list to organize daily tasks: </p>
            <p>Framework used: React 18.2</p>
            <p>This project was bootstraped by <a href="https://vitejs.dev/">Vite</a></p>
            <p> Some styles HTML / CSS are retrieved from :<br/>
               <a href="https://codepen.io/MarianKoniuszko/pen/gOoJmaG">https://codepen.io/MarianKoniuszko/pen/gOoJmaG</a>  <br/>    
               <a href="https://codepen.io/sashatran/pen/pRpmWG">https://codepen.io/sashatran/pen/pRpmWG</a> 
            </p>
        </div>
      <hr/>
      <div className="container text-white" >
            <h1 className="text-center"> Developper Info </h1>
            <p>Login: {userInfo.login}</p>
            <p>Github profile: {userInfo.github_profile}</p>
            <img src={userInfo.avatar_url} alt="Avatar" /><br/><br/>
            {/* <button className="btn btn-dark text-center" onClick={()=>navigation(-1)}>Back</button> */}
    </div>
      </>
    );


}