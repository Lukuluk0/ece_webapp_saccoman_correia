import UserContext from './UserContext'
import { useContext } from 'react'

const Project_action = (props) => 
{
    const { user } = useContext(UserContext)

    function Delete()
    {

    }
    function Update()
    {

    }
    
    if((user === undefined)||(props.author !== user.id))
    {
        return <div>
            <p>If you want to discuss about this project, you can post a commentary</p>
        </div>
        
    } 
    else{
        
        return <div className="mt-12 flex gap-x-4 justify-center">
        
        <button className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-indigo-500 hover:ring-indigo-500"
        >
          Update our project
        </button>
        <button 
        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30"
>
          Delete our project
          <span className="text-black" aria-hidden="true">&rarr;</span>
        </button>

</div>
    }
}

export default Project_action