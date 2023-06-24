import { queryHandler } from "../db";
export const authorize=async(credentials)=>{
    const {email,password}=credentials; 
    const {status,...body}= await queryHandler(`select * from user where email="${email}"`);
    console.log(status,body,"statuuuuuuuuuus")
    return  status ? {name:body.data[0].name,id:body.data[0].id} : null;

  }
