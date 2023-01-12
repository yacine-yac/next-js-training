 
export default function Todos({todo}){
    return <>
       <h1>Hi, There you are selected : {todo.id} </h1>
       <h2>{todo.title}</h2>
        
    </>
}


export async function getServerSideProps(context){
    const fetching=await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`);
    const data=await fetching.json();
    return {
        props:{
            todo:data
        }
    }
}