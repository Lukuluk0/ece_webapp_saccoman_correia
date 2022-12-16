import UserContext from './UserContext'
import { useContext } from 'react'
import Link from "next/link"

const Project_action = (props) => 
{
    const { user } = useContext(UserContext)

    function Delete()
    {
        
    }
    function Update()
    {

    }
    
    if((user === undefined))
    {
        return <div>
            <p>If you want to discuss about this project, you can post a comment</p>
        </div>
        
    } 
    if(props.author !== user.id)
    {
        return <div>
            <p>If you want to discuss about this project, you can post a comment</p>
        </div>
    }
      
        return <div className="mt-12 flex gap-x-4 justify-center">
        <Link href ={{pathname:'/projects/update',query:'id='+props.project_info.id}}>
        <button className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-indigo-500 hover:ring-indigo-500"
        >
          Update the project
        </button>
        </Link>
        <button 
        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30"
>
          Delete the project
          <span className="text-black" aria-hidden="true"></span>
        </button>

</div>
    
}

export default Project_action