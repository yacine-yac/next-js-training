import {useRouter} from "next/router"


//take picture id of user id ZS
export default function Pictures(){
    const {query} = useRouter();
    console.log(query);
    return<>
       <h2>You show the picture {query.picturesId} of the user {query.userId} </h2>
    </>
}