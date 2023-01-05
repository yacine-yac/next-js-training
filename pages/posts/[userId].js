import PostItem from "../../components/postItem";
export default function DetailPost({id,title,content}){
    return <>
          <h1>Post detail :</h1>
          <PostItem id={id} content={content} title={title} ></PostItem>

    </>;
}

export async function getStaticProps(params){
 console.log(params)
 return {
    props:{
        data:{id:"55",title:"eeeee",content:'dsfdqdssdvwxcvf'}
    }
 }
}