import { useState, useContext } from 'react'
import Layout from '../../components/Layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import UserContext from '../../components/UserContext'
import { useRouter } from 'next/router'
import { decode } from 'base64-arraybuffer' 

const Creation = () => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const [datas, setDatas] = useState({})
  const [file, setFile] = useState([])
  const [message, setMessage] = useState(null)
  const { user } = useContext(UserContext)
  const onSubmit = async function (e) {
  e.preventDefault()
  if (Object.keys(datas).length === 0) {
    setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Your form is canceled</p>
        </div>
      )
    }
    else{
      const tpic= datas.titlepic + ".png"
      const { error1 } = await supabase
      .storage
      .from('avatars')
      .upload(tpic, file, {
        cacheControl: '3600',
        upsert: false
      })
      if(error1){
      setMessage(<div>
        <h2 className="text-center mt-3">Warning</h2>
        <p>An error occured, try again please or make sure the title of your uploaded picture is proper</p>
      </div>)
    }else{
    const { data } = await supabase
      .storage
      .from('avatars')
      .getPublicUrl(tpic)
    const feature=datas.features.split(";")
    const skill=datas.skills.split(";")
    const {error2} = await supabase
    .from('projects')
    .insert({creator_id: user.id, title:datas.title, description:datas.description, features: feature, skills: skill, languages: language, pictures: data.publicUrl})
    if(error2){
      setMessage(<div>
        <h2 className="text-center mt-3">Warning</h2>
        <p>An error occured, try again please or make sure the contained is proper</p>
      </div>)
    }else{
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Thank you for your contribution</p>
        </div>
      )
    }
  }
} 
  }
  return (
    <Layout>
      <h2 className="text-center text-xl font-bold">Publicate a new project</h2>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={onSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div className="mt-1 ">
                    <input
                      type="text"
                      name="title"
                      value={datas.my_value}
                      onChange={e => setDatas({ ...datas, ...{ title: e.target.value } })}
                      className="block w-full flex-1 rounded-md border-gray-300 border-2 focus:border-bleu focus:ring-bleu sm:text-sm"
                      placeholder="Webtech"
                      required="required"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    name="description"
                    value={datas.my_value}
                    onChange={e => setDatas({ ...datas, ...{ description: e.target.value } })}
                    rows={3}
                    className=" block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-bleu focus:bleu sm:text-sm"
                    placeholder="My project ..."
                    required="required"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description of your project
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Feature
                </label>
                <div className="mt-1">
                  <textarea
                    name="features"
                    value={datas.my_value}
                    onChange={e => setDatas({ ...datas, ...{ features: e.target.value } })}
                    rows={3}
                    className=" block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-bleu focus:bleu sm:text-sm"
                    placeholder="User connexion,..."
                    required="required"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Enumerate features, separate each with a semicolon !
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Skills
                </label>
                <div className="mt-1">
                  <textarea
                    name="skills"
                    value={datas.my_value}
                    onChange={e => setDatas({ ...datas, ...{ skills: e.target.value } })}
                    rows={3}
                    className=" block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-bleu focus:bleu sm:text-sm"
                    placeholder="Project based on MVC model, ..."
                    required="required"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Enumerate skills, separate each with a semicolon !
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Languages and framework
                  </label>
                  <div className="mt-1 ">
                    <input
                      type="text"
                      name="language"
                      value={datas.my_value}
                      onChange={e => setDatas({ ...datas, ...{ language: e.target.value } })}
                      className="block w-full flex-1 rounded-md border-gray-300 border-2 focus:border-bleu focus:ring-bleu sm:text-sm"
                      placeholder="Next.js, Tailwinds, ..."
                      required="required"
                    />
                  </div>
                </div>
              </div>
            
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Title of the pictures
                  </label>
                  <div className="mt-1 ">
                    <input
                      type="text"
                      name="titlepic"
                      value={datas.my_value}
                      onChange={e => setDatas({ ...datas, ...{ titlepic: e.target.value } })}
                      className="block w-full flex-1 rounded-md border-gray-300 border-2 focus:border-bleu focus:ring-bleu sm:text-sm"
                      placeholder="Webtech"
                      required="required"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Give a name, don't put any forbidden characters like *,' or space !
                  </p>
                </div>
              </div>
           
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input 
                            name="file-upload" 
                            type="file" 
                            onChange={(e) => setFile(e.target.files[0])}
                            className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">only PNG</p>
                      </div>
                      </div>
                      </div>
            
            <div className="bg-gray-50 px-4 py-3 grid grid-cols-2 sm:px-6 md:gap-x-60 gap-x-10">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-bleu py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setDatas({})}
              >
                Cancel this form
              </button>
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-bleu py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Validate this form and saved in database
              </button>
            </div>
          </div>
        </form>
        {message &&
          <div
            aria-label="Overlow below the drawer dialog"
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => {setMessage(null)
              router.push('/projects')}}
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
      </div>
    </Layout>

  )
}

export default Creation