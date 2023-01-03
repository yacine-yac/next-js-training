import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css' 


import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
  const [state,setState]=useState(true);
  const router=useRouter();
  const handler=()=>{setState(false)}
  useEffect(()=>{
    // when state will be false we load login page
     state ===false && router.push('/login');
  },[state]);
  return (
    <>
     <h1>Hello Next Js</h1>
       <button onClick={handler}>Log out</button>
       <Link href='/about'>About</Link>
    </>
  )
}
