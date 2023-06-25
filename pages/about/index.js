import Link from "next/link";
import {  authOptions } from "../Api/Auth/[...nextauth]"
import { getServerSession} from 'next-auth/next';

const About=()=>{
    return <>
    <h1> Hello from About page  </h1>
     <Link href="/">home</Link>
    </>
}

About.auth={
  authorization:true
}
export default About