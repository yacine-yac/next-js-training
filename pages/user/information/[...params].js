import { useRouter } from "next/router"
export default function Information(){
    const {query}= useRouter();
    console.log(query.params) //params is array has more endpoints in the uri
    return <>
     <h1>All information</h1>
      {query.params?.map((x,y)=><li key={y}>{x}</li>)}
    
    </>
}