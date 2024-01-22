'use client';
import Header from '@/components/Header';
import Description from '@/components/Description';
import styles from "./page.module.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';


function Home() {

const [counter, setCounter]= useState(0);

 const handleClick = ()=>{
setCounter(counter +1);
 }

 useEffect(()=>{
  console.log("Event has been triggered!!");
  
 },[])

 
 
  return (
    <main>
    <h1>Home</h1>
    <div>counter: {counter}</div>
    <button onClick={handleClick}>Click to increment</button>
    </main>
  );
}
export default Home;