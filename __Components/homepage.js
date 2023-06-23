import { signOut } from "next-auth/react"
import Link from "next/link";

export default function HomePage({name}){
        return <><h1>Hello in your space Mr:{name}</h1>
        <br></br>
        <Link href='/about'>About</Link>
    <button onClick={(e)=>{e.preventDefault();signOut("github")}} href="/api/auth/signout">Signout</button>
        </>
}