import Link from "next/link"
import Image from 'next/image'
import mypic from '../assets/logo.png'
import { useEffect, useState } from "react"

const Navbar =()=>{
/*   fetch('http://localhost:3000/api/profile')
  .then(res => console.log(res))
  let [user,setuser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/profile`)
         .then(profile => profile.json())
         .then(data => setuser(data.message))
  }, []) */

    return <div>
      < nav className = "container-fluid flex justify-between py-5 px-5 mx-auto bg-vert-mousse-f" > 
   < div className = "flex items-center" >  
    < Image src={mypic}
    width="50px"
    height="50px"
    alt="my-blog"
    /> 
  </ div > 
  <div className=" items-center space-x-20 lg:flex">
    <Link href="/">
        <h3 className = "text-white rounded md:hover:text-olivine text-xl">Home </h3>
      </Link>
    <Link href="/about">
        <h3 className = "text-white rounded md:hover:text-olivine text-xl ">About Us </h3>
      </Link>
  
      <Link href="/articles">
        <h3 className = "text-white rounded md:hover:text-olivine text-xl ">Articles </h3>
      </Link>
   
      <Link href="/contact">
        <h3 className = "text-white rounded md:hover:text-olivine text-xl">Contactez nous</h3>
      </Link>
      </div>
      <div className="flex items-center space-x-4">
    <div className="inline-block border border-algues-metal bg-algues-metal hover:bg-olivine rounded py-2 px-4 hover:border-olivine text-white text-xl">
      Sign in
    </div>
    <div className="inline-block border border-violette-esp bg-violette-esp rounded hover:border-olivine text-white text-xl hover:bg-olivine py-2 px-4">
      
    </div>
  </div>
      </nav>
      </div>
}

export default Navbar