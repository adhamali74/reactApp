
import Header from '@/components/Header';
import Description from '@/components/Description';
import styles from "./page.module.css";
import Link from 'next/link';


function Home() {
  let hideDescription = true;
  return (
    <main>
      <div>
        <Header  text='HELLO FROM REACT WORLD!'></Header>
        {hideDescription ? <Description></Description> : null}
        </div>
        <Link href="/about">Go to About page </Link>
    </main>
  )
}
export default Home;