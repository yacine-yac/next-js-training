import {useRouter} from "next/router";
export default function DetailPost({data}){
    const router=useRouter();  
    if(router.isFallback){
        return <h1>waiting...</h1>
    }
    return <>
          <h1>Post detail :</h1> 
          <h2>{data.title}</h2>
          <p>{data.body}</p>
    </> 
}

export async function getStaticPaths(){
    return {
        paths:[{params:{postId:"1"}},{params:{postId:"2"}},{params:{postId:"3"}},{params:{postId:"4"}}],
        fallback:true
    }
}
export async function getStaticProps(context){ 
    const fetching=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`);
    const data=await fetching.json();
    
 return {
    props:{data:data}
 }
}