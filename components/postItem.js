import Link from "next/link";

export default function PostItem({id,title,content}){
    return <>
        <Link href={`/posts/${id}`}><h3>{title}</h3></Link>
        <p>{content}</p>
        <hr></hr>
    </>
}