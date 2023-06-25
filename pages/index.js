import Welcom from "../__Components/welcom"
import HomePage from "../__Components/homepage" 
import { useSession  } from "next-auth/react"
import { signOut } from "next-auth/react"
export default function Home() {
     const {status,data}=useSession() 
      // console.log(status,data) 
 
//  return  status == "unauthenticated"
//   ?  (<Welcom />)
//   : status=="loading" ? <h1>is loading ...</h1>
//   : <>
//       <h1>Welcom you are authenticated</h1>
//       <button onClick={(e)=>{e.preventDefault();signOut()}} >Signout</button>
    
//   </> 
//   : <HomePage name={data.user?.name} />
return <>
      {status==="authenticated" && <h1>You are auth</h1>}
        <Welcom />
</> 
}
