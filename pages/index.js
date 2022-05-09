import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from './components/products'

export default function Home({props}) {
  // console.log("props", props);

  return (
    <div className='home'>
      <h1>STORE HOME</h1>
      <Products props={props}/>

    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/get-products');
  let props = await res.json()

  return {
    props: {
      props
    },
  };
}
