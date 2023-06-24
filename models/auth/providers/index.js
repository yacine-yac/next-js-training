import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import {authorize} from '../methods.js';
export const github=GithubProvider({
    clientId:process.env.GITHUB_ID,
    clientSecret:process.env.GITHUB_SECRET
});
export const credentials=CredentialsProvider({
                authorize
})