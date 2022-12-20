import { useState, useContext } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import UserContext from './UserContext'
import Router, { useRouter } from 'next/router'

const Comment = (props) =>
{
    const supabase = useSupabaseClient()
    const [message, setMessage] = useState(null)
    const { user } = useContext(UserContext)
    const [data, setData] = useState({})
    const router = useRouter()
    const onSubmit = async function(e){
        e.preventDefault()
        console.log(data.comment)
        const { error } = await supabase
          .from('comments')
          .insert({user_id: user.id, content: data.comment, project_id: props.pid,email:user.email})
        if(error){
          setMessage('Make sure that you are connected')
        }else{
          router.reload()
        }
      }
    return ( 
    <>
    <form onSubmit={onSubmit}>
    <div className=" my-4 mx-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label class="sr-only">Your comment</label>
           <textarea
                name="comment" 
                rows="2" 
                value={data.my_value}
                onChange={e => setData({ ...data, ...{ comment: e.target.value } })}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                placeholder="Write a comment..." 
                required>
           </textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-bleu rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
       </div>
    </div>
    </form>
    {message &&
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      }
     </>
    )
}

export default Comment