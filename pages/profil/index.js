 import {getSession } from "next-auth/react" 
export default function Profil({session} ){ 
    
    return <>
    <h1>Hello from Profil page </h1>
    <p>
            {/* { session.user.name} */}
    </p>
    </>
}

// export  async function getServerSideProps (context){ 

//     const session = await getSession(context);
//       return    session ? {props:{session}} 
//                      : {redirect: {
//                         destination: '/notfound',
//                         permanent: false,
//                       }}
// } 