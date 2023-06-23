import Link from "next/link"
import { signIn,signOut } from "next-auth/react"
export default function Welcom(){
    return <>
      <h1>Welcom to our Authentication training</h1>
    <br></br> 
    <button onClick={(e)=>{e.stopPropagation();signIn();}} href="/api/auth/signin">SignIn with github</button> 
    <br></br>
    <div class="main-part1 center-h"> 
            <span>Create New Account? <a active-mode="true" href="/register">Sign up</a></span> 
            <div class="center-h">
                    <form method="post" action="/" >
                        <label class="center-h" for="email">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#727a89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#727a89" stroke-width="2" stroke-linecap="round"/> </g></svg>
                            <input id="email" type="email" name="email" placeholder="email" />
                        </label>
                        <span> </span> 
                        <label class="center-h" for="psd">
                            <svg width="64px" height="64px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.408 3.412a1.974 1.974 0 0 0 0-2.82 1.973 1.973 0 0 0-2.819 0l-.29.29-.59-.59a1.009 1.009 0 0 0-1.65.35l-.35-.35a1.004 1.004 0 1 0-1.42 1.42l.35.35a1.033 1.033 0 0 0-.58.58l-.35-.35a1.004 1.004 0 0 0-1.42 1.42L9.879 5.3l-3.02 3.01c-.01.01-.02.03-.03.04A4.885 4.885 0 0 0 5 8a5 5 0 1 0 5 5 4.885 4.885 0 0 0-.35-1.83c.01-.01.03-.02.04-.03l7.718-7.728zM5 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#727a89" fill-rule="evenodd"></path> </g></svg>
                            <input id="psd" type="password" name="password" placeholder="password"  />
                        </label>
                        <span> </span> 

                        <button class="bottom-self" type="submit">Login</button>
                    </form>
            </div>
            <span class="message"><a href="">Forget password ?</a></span>
</div>
    </>
}