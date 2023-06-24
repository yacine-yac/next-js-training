import Link from "next/link"
import { useRouter } from "next/router";
import { signIn,signOut } from "next-auth/react";
import { useState } from "react";
export default function Welcom(){
    const [{email,password},setInputs]=useState({email:null,password:null});
    const {query}=useRouter();
    const gitAuth=(e)=>{ e.stopPropagation();signIn("github");console.log('github') }
    const credAuth=(e)=>{
        console.log(email)
        e.preventDefault();
        e.stopPropagation();
        signIn('credentials',{email,password, callbackUrl:"/about",redirect:false});
    }
    console.log(email,password)
    const setEmail=(e)=>{setInputs(inp=>{return {...inp,email:e.target.value} })}
    const setPassword=(e)=>{setInputs(inp=>{return {...inp,password:e.target.value} })}

    return <>
      <h1>Welcom to our Authentication training</h1>
    <br></br> 
    <button onClick={gitAuth}>SignIn with github</button> 
    <br></br>
    <div className="main-part1 center-h"> 
            <span>Create New Account? <a active-mode="true" href="/register">Sign up</a></span> 
            <div className="center-h">
                    <form onSubmit={credAuth} method="post">
                        <label className="center-h" htmlFor="email">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#727a89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#727a89" strokeWidth="2" strokeLinecap="round"/> </g></svg>
                            <input id="email" type="email" name="email" onChange={setEmail} placeholder="email" />
                        </label>
                        <span> </span> 
                        <label className="center-h" htmlFor="psd">
                            <svg width="64px" height="64px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.408 3.412a1.974 1.974 0 0 0 0-2.82 1.973 1.973 0 0 0-2.819 0l-.29.29-.59-.59a1.009 1.009 0 0 0-1.65.35l-.35-.35a1.004 1.004 0 1 0-1.42 1.42l.35.35a1.033 1.033 0 0 0-.58.58l-.35-.35a1.004 1.004 0 0 0-1.42 1.42L9.879 5.3l-3.02 3.01c-.01.01-.02.03-.03.04A4.885 4.885 0 0 0 5 8a5 5 0 1 0 5 5 4.885 4.885 0 0 0-.35-1.83c.01-.01.03-.02.04-.03l7.718-7.728zM5 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#727a89" fillRule="evenodd"></path> </g></svg>
                            <input id="psd" type="password" name="password" onChange={setPassword} placeholder="password"  />
                        </label>
                        <span> </span> 

                        <button  className="bottom-self" type="submit">Login</button>
                    </form>
            </div>
            <span className="message"><a href="">Forget password ?</a></span>
           {query?.error && <div> {query.error } </div>} 
</div>
    </>
}