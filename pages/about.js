import Head from 'next/head'
export default function About(){
    return <>
    {/* declare head tags as children tags to Head component  */}
    <Head>
       <title>About</title>
    </Head>
      <h1>Hello About page</h1>
    </>
}