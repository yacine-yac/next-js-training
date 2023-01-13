import {useState,useEffect} from 'react'
import {useRouter} from "next/router";
export default function Comments(){
    const {query}=useRouter();
    const [state,setState]=useState([]); 
    useEffect(()=>{
            const fetchData=async()=>{
                const fetching=await fetch(`/api/comments/${query.idCmnt}`);
                const data=await fetching.json();
                setState(data)
            }
            fetchData()
    },[]);
    
   
   return <> 
       {state.length===0 && <h1>fetch comment ...</h1>}
      {state.length>0 && state.map((x,y)=><div key={y}>{x.id}</div>)}
    </>
}