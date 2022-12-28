import UserContext from './UserContext'
import { useContext, useState } from 'react'
import Link from "next/link"
import { supabase } from '../pages/api/supabase'
import { useRouter } from 'next/router'

const Project_action = (props) => {
    const router = useRouter()
    const { user } = useContext(UserContext)

    console.log('PID : ' + props.pid)

    const Delete = async function (e) {
        e.preventDefault()
        const { error1 } = await supabase
            .from('comments')
            .delete()
            .eq('project_id', props.pid)

        const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', props.pid)
        console.log(error)

        router.push("/projects/")
    }

    if ((user === undefined)) {
        return <div className="text-center mt-12">
            <p>If you want to discuss about this project, you must be authenticated</p>
        </div>
    }
    if (props.author !== user?.id) {
        return <div className="text-center mt-12 ">
            <p>If you want to discuss about this project, you can post a comment</p>
        </div>
    }
    return <div className="mt-12 flex gap-x-4 justify-center">
        <Link href={{ pathname: '/projects/update', query: 'id=' + props.pid }}>
            <button className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-gray-300 hover:ring-gray-300"
            >
                Update the project
            </button>
        </Link>
        <button onClick={Delete}
            className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30"
        >
            Delete the project
            <span className="text-black" aria-hidden="true"></span>
        </button>

    </div>
}

export default Project_action