import { useRouter } from 'next/router'
import { useContext, useEffect, useState,useRef } from 'react'
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import UserContext from '../components/UserContext'
import { useTheme } from "next-themes"
import { Editor } from '@tinymce/tinymce-react';
import Gravatar from 'react-gravatar'

const UserForm = () => {
  const supabase = useSupabaseClient()
  const editorRef = useRef(null);
  const { user, logout, loading } = useContext(UserContext)
  const [dataUser, setData] = useState({})

  const [colour, setColor] = useState()

  const setUserData = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', user?.id)
      .limit(1)
      .single()
    if (user) {
      setData({ username: data?.username })
    }

  }

  useEffect(() => {
    setColor(getComputedStyle(document.documentElement).getPropertyValue('--bleu'))
    setUserData()

  }, [user])


  const { systemTheme, theme, setTheme } = useTheme()
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme == 'dark') {
      return <><input value='Light' type="button" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-2 ring-gray-900/10 hover:ring-gray-900/30 dark:bg-gray-800 dark:text-gray-100" onClick={() => setTheme('light')} /><br />
      </>
    } else {
      return <><input type="color"

        value={colour}
        id="color" onChange={e => { setColor(e.currentTarget.value) }} /><br />
      </>
    }
  }

  const UpdateDB = async function (e) {
    e.preventDefault()
    console.log(user.id)
    console.log(dataUser)
    const { error } = await supabase
      .from('profiles')
      .update({ username: dataUser.username, color: colour.toString() })
      .eq('id', user?.id)
    console.log(error)
  }

  return (<>
    <div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center dark:bg-gray-800">
      <div class="card w-30 mx-auto bg-white  shadow-xl hover:shadow dark:bg-gray-900 rounded-lg p-100">

        <div class="text-center mt-2 text-3xl font-medium"><Gravatar class="text-center" email={user?.email} /></div>
        <div class="text-center mt-2 font-light text-sm">id : {user?.id}</div>

        <div class="px-6 text-center mt-2 font-light text-sm">
          <p>
            Hello! This is your profile page. You can change your username and your favorite color to navigate the site.
          </p>
        </div>
        <hr class="mt-8" />
        <form onSubmit={UpdateDB}>
          <div class="form-group mb-6">
            <input type="text"
              value={!(dataUser) ? dataUser.my_value : dataUser.username}
              onChange={e => setData({ ...dataUser, ...{ username: e.target.value } })}
              class="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white
                bg-clip-padding
                border
                border-soli
                border-gray-300
                rounded
                transition
                ease-in-out
                m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Userame" />
          </div>
          <div class="form-group form-check text-center mb-6">
            {renderThemeChanger()}
            <label class="form-check-label inline-block text-gray-800 dark:text-white" for="exampleCheck87">Select your favorite color</label>
          </div>

          <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-bleu
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-bleu hover:shadow-lg
      focus:bg-bleu focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-bleu active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
        </form>
      </div>
    </div>
    <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue="<p>WYSIWYG</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
  </>
  )
}

export default UserForm