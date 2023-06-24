import { useSession } from "next-auth/react";
export default  function Auht({children}){
    const {status}=useSession();console.log(children)
    return  status=="authenticated"
                ?  children
                :
            status=="unauthenticated" 
                ?<>
                    <h2>This page not exists</h2>
                </>
                :<h1>Loading ...</h1>
}