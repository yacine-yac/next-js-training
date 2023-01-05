import PostItem from "../../components/postItem";

export default function Posts({posts}){
   return <>
    <h1> Your posts:</h1>
    {posts.map(x=><PostItem key={x.id} id={x.id} title={x.title} content={x.body} />)}
   </> 
}

export async function getStaticProps(){
    const fetching=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await fetching.json();
    return {
        props:{
            posts:data.slice(0,4)
        }
    }
}