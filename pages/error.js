import Link from "next/link"
import {useRouter} from "next/router";
export default function ErrorComponenr(){
        const {query}=useRouter();
        console.log(">>>>>>>>>",query)
    return <><h1>Error Handler by yacine {query.error} </h1>
    <p>Message </p>
    <Link href="/">Go back</Link>
    </>
}
