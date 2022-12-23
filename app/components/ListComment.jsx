import { useSupabaseClient } from "@supabase/auth-helpers-react"
import UserContext from './UserContext'
import { useContext, useEffect, useState } from 'react'
import Gravatar from 'react-gravatar'
import Comment from './Comment'

const ListComment = (props) => {
    const supabase = useSupabaseClient()
    const { user } = useContext(UserContext)
    const [comment, setComment] = useState(null)
    useEffect(() => {

        (async () => {
            let { data } = await supabase
                .from('comments')
                .select()
                .eq('project_id', props.pid)
            setComment(data)
        })()
    }, [supabase, props.pid])



    return (

        <div>
            {comment?.map((comm) => (
                <div key={comm.id}>
                    <Comment comm={comm} />
                    

                </div>))}
        </div>
    )
}

export default ListComment