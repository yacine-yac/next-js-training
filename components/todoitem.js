import Link from "next/link"
export const TodoItem=({id,title,state})=>{
    return <>
      <ul>
        <li>{id}</li>
        <li><Link href={`/todos/${id}`} >{title}</Link> </li>
        <li>{state ? 'the task is done': 'the task is not finish'}</li>
      </ul>
      <br/>
      <br/>
    </>
}