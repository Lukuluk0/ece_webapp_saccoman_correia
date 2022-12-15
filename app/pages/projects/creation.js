import { useState, useContext } from 'react'
import Layout from '../../components/Layout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import UserContext from '../../components/UserContext'
import { useRouter } from 'next/router'

const Creation = () => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const [data, setData] = useState({})
  const [message, setMessage] = useState(null)
  const { user } = useContext(UserContext)
  const onSubmit = async function (e) {
    e.preventDefault()
    if (Object.keys(data).length === 0) {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Your request have been registrered</p>
        </div>
      )
    }
    else{
      const feature=data.features.split(";")
    const language=data.languages.split(";")
    const skill=data.skills.split(";")
    const {error} = await supabase
    .from('projects')
    .insert({creator_id: user.id, title:data.title, description:data.description, features: feature, skills: skill, languages: language, pictures:["",""]})
    if(error){
      setMessage(<div>
        <h2 className="text-center mt-3">Confirmation</h2>
        <p>An error occured, try again please or make sure you are connected</p>
      </div>)
    }else{
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Thank you for contribution</p>
        </div>
      )
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
                      value={data.my_value}
                      onChange={e => setData({ ...data, ...{ title: e.target.value } })}
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
                    value={data.my_value}
                    onChange={e => setData({ ...data, ...{ description: e.target.value } })}
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
                    value={data.my_value}
                    onChange={e => setData({ ...data, ...{ features: e.target.value } })}
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
                    value={data.my_value}
                    onChange={e => setData({ ...data, ...{ skills: e.target.value } })}
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
                      name="languages"
                      value={data.my_value}
                      onChange={e => setData({ ...data, ...{ languages: e.target.value } })}
                      className="block w-full flex-1 rounded-md border-gray-300 border-2 focus:border-bleu focus:ring-bleu sm:text-sm"
                      placeholder="Next.js, Tailwinds, ..."
                      required="required"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Enumerate, separate each with a semicolon !
                  </p>
                </div>
              </div>

            </div>
            <div className="bg-gray-50 px-4 py-3 grid grid-cols-2 sm:px-6 md:gap-x-60 gap-x-10">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-bleu py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setData({})}
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
              router.reload(window.location.pathname)}}
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