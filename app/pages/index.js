import Link from 'next/link'

import Navbar from '../component/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
     {" "}
     <Navbar />
     <h1>Home page</h1>
     
    </div>
  )
}


