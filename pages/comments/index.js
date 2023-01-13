import {useState} from 'react'
export default function Comments(){
   const [state,setState]=useState([]);
   const fetchData=async()=>{
       const fetching=await fetch('/api/comments');
       const data=await fetching.json();
       setState(data)
   }
   return <>
      <button onClick={fetchData}>Release</button>
      {state.length===0 && <h1>Loading data</h1>}

      {/* user will press button to fetch data api from front end app */}
      {state.map((x,y)=><div key={y}>{x.body}</div>)}
    </>
}