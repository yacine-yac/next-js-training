import { queryHandler } from "../db";
export const authorize=async(credentials)=>{
    const {email,password}=credentials;
    if(email=="null"){ throw new Error('Please, provide and email');}
    if(password=="null"){throw new Error('Please, provide and password');}

    const {status,...body}= await queryHandler(`select * from user where email="${email}"`);


    if(!status){throw new Error('User not exists');}
     
    if(body.data[0].password!=password) throw new Error('Please check your passwrod');
 
    return  status ? {name:body.data[0].name,id:body.data[0].id} : null;

  }
