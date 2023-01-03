import { useRouter } from "next/router"
export default function user(){
    const routing=useRouter();
    return <><h2>child user {routing.query.userId} </h2></>
}