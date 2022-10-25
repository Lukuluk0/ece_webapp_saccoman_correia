import Link from "next/link"

const Navbar =()=>{
    return <div><Link href="/">
        <a>Home</a>
      </Link>
    
      <Link href="/about">
        <a>About Us</a>
      </Link>
  
      <Link href="/articles">
        <a>Articles</a>
      </Link>
   
      <Link href="/contact">
        <a>Contactez nous</a>
      </Link></div>
   
}

export default Navbar