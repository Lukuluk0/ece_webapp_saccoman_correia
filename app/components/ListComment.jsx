import { useSupabaseClient } from "@supabase/auth-helpers-react"
import UserContext from './UserContext'
import {useContext, useEffect, useState} from 'react'

const ListComment = (props) =>
{
    const supabase = useSupabaseClient()
    const {user} =useContext(UserContext)
    const [comment,setComment] = useState(null)
    useEffect(() => {
    
        (async () => {
        let {data} = await supabase
        .from('comments')
        .select()
        .eq('project_id',props.pid)
        setComment(data)
    })()
}, [supabase])
console.log(comment)
return (
    
    <div>
    {comment.map((comm) =>(
        <div key={comm.id}> 
<article className="px-6 py-3 text-base  rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"/>
                            {comm.user_id}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{comm.craeted_at}</p>
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{comm.content}</p>
    </article>
        </div>))}
    </div>
)
}

export default ListComment