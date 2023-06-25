import NextAuth from "next-auth"
import { github,credentials } from "../../../models/auth/providers/index";
 
export const authOptions={
          providers:[github,credentials],
          secret:"esgen",
          // pages:{
          //       signIn:"/",
          //       signOut:"/",
          //       error:"/"
          // },
          jwt:{
            maxAge: 60*60 
          },
          callbacks:{
            async signIn(context){
              console.log('context',context);
              return true
            },
            async redirect({ url, baseUrl }) {
              return baseUrl
            },
            // async session({ session, token, user }) {
            //   return session
            // },
            // async jwt({ token, user, account, profile, isNewUser }) {
            //   return token
            // }
          }
  };
export default async function auth(req,res){
  return await NextAuth(req,res,authOptions);
};