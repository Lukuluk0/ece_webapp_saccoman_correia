import UserContext from './UserContext'
import { useContext, useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import { useRouter } from 'next/router'
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const Comment = (props) => {
  const { user } = useContext(UserContext)
  const [edit, setEdit] = useState(false)
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [data, setData] = useState({ ...props.comm })

  const Delete = async function (e) {
    e.preventDefault()
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', props.comm.id)
    router.reload()
  }

  const onSubmit = async function (e) {
    e.preventDefault()

    const { error } = await supabase
      .from('comments')
      .update({ content: data.content })
      .eq('id', props.comm.id)
    if (error) {
      setMessage('Make sure that you are connected')
    } else {
      router.reload()
    }
  }

  if (edit === false) {
    return (<> <article className="px-6 py-3 text-base rounded-lg bg-gray-100 dark:bg-gray-900 ring-2 ring-gray-700/10">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <Gravatar className='w-5 h-5' email={props.comm.email} />
            {props.comm.email}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{props.comm.created_at}</p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-white">{props.comm.content}</p>
    </article>
      {(user?.email === props.comm.email) ?
        <>
          <button onClick={() => setEdit(true)} className="bg-bleu text-white active:bg-gray-800 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
          >
            Update
          </button>
          <button onClick={Delete} className="bg-gray-800 text-white active:bg-bleu font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
          >
            Delete
          </button>
        </>
        :
        <></>
      }
    </>)
  } else {
    return (<><form onSubmit={onSubmit}>
      <div className=" my-4 mx-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label class="sr-only">Your comment</label>
          <textarea
            name="comment"
            rows="2"
            value={data?.content}
            onChange={e => setData({ ...data, ...{ content: e.target.value } })}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required>
          </textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-bleu rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Update comment
          </button>
        </div>
      </div>
    </form>
    </>)
  }
}


export default Comment