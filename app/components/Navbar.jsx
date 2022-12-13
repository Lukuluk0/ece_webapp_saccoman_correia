import Link from "next/link"
import Image from 'next/image'
import mypic from '../assets/ece_icon.png'
import Login from './Login'

import { INTERNALS } from "next/dist/server/web/spec-extension/request"

const Navbar =()=>{
/*   fetch('http://localhost:3000/api/profile')
  .then(res => console.log(res))
  let [user,setuser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/profile`)
         .then(profile => profile.json())
         .then(data => setuser(data.message))
  }, []) */
 
  let Links =[
    {name: "Home", link:"/"},
    {name: "About Us", link:"/about"},
    {name: "Projects", link:"/projects"},
    {name: "Contact Us", link:"/contact"},
    ]

    return <div>
      < nav className = "md:flex md:items-center md:justify-between mx-auto py-3 md:px-8 px-2 bg-bleu" > 
   < div className = "flex items-center" >  
    < Image src={mypic}
    width="100px"
    height="50px"
    alt="my-blog"
    /> 
    <span>

    </span>
  </div > 
  <ul className=" items-center md:space-x-20 md:flex ">
    {
      Links.map((items)=>(
        <div key={items.name}>
        <li>
          <h3 className = "text-white rounded hover:text-black text-l"><Link href={items.link}>{items.name}</Link></h3>
        </li>
        </div>
      ))
    }
    <Login/>
      </ul>
      </nav>
      </div>
}

export default Navbar
