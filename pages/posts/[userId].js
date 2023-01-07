import PostItem from "../../components/postItem";
export default function DetailPost({data}){
    // const {title,id,body}=props
    // console.log( data.id)
    return <>
          <h1>Post detail :</h1>
          <h3>{ data.id}</h3>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
    </>;
}

export async function getStaticPaths(){
    return {
        paths:[{params:{userId:"1"}},{params:{userId:"2"}},{params:{userId:"3"}},{params:{userId:"4"}},],
        fallback:true
    }
}
export async function getStaticProps(context){console.log(context,'contexct');
    const fetching=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.userId}`);
    const data=await fetching.json();

 return {
    props:{
        data:data
    }
 }
}