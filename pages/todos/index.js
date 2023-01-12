import { TodoItem } from "../../components/todoitem";

export default function Todos({todo}){
    return <>
       <h1>To Do List</h1>
       {todo.map((x,y) =><TodoItem key={y} id={x.id} title={x.title} state={x.completed} />)}
    </>
}


export async function getServerSideProps(){
    const fetching=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await fetching.json();
    return {
        props:{
            todo:data
        }
    }
}