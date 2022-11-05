import Link from "next/link"

const Navbar =()=>{
    return <div>
      < nav className = "container-fluid flex justify-between py-8 px-8 mx-auto bg-white" > 
   < div className = "flex items-center" >  
    < div className = " text-2xl font-medium text-blue-500" >LOGO</ div > 
  </ div > 
  <div className=" items-center space-x-20 lg:flex">
    <Link href="/">
        <a className = "text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home </a>
      </Link>
    <Link href="/about">
        <a>About Us </a>
      </Link>
  
      <Link href="/articles">
        <a>Articles </a>
      </Link>
   
      <Link href="/contact">
        <a>Contactez nous</a>
      </Link>
      </div>
      <div className="flex items-center space-x-4">
    <div className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
      Sign in
    </div>
    <div className="px-4 py-2 text-gray-200 bg-gray-400 rounded-md">
      Sign up
    </div>
  </div>
      </nav>
      </div>
}

export default Navbar