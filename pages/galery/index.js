import Image from "next/image"
export default function Handle(){
    return <>
            <h1>Image</h1>
            <Image src="/az.jpg" width={300} height={150} />
    </>
}