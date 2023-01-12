import UserListed from "../../components/userListed";

export default function AllUsers({users}){
    // console.log("users",users);
    return <> <h1>hi users</h1>
    
    {users.map((item,y) => {
        return <UserListed key={y} name={item.name} />
    })}
     </>
}

//props will be passed to the component 
// as well we can fetch data from third party
export async function getStaticProps(){
    const fetching=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await fetching.json()
 return {
   props:{
          users:data
   } 
 }
}