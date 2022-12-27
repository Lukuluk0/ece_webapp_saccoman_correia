import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout.jsx'
import UserContext from '../components/UserContext'
import UserForm from '../components/UserForm'
import { useSupabaseClient } from "@supabase/auth-helpers-react"

export default function Contact() {
  const { user, logout, loading } = useContext(UserContext)
  const router = useRouter()


  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading, router])

  const onClickLogout = function () {
    document.documentElement.style.setProperty('--bleu', '#5952CA');
    logout()
  }



  return (
    <Layout>
      <Head>
        <title>WebTech - user signedin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!(user || loading) ?
        <p>Redirecting...</p>
        :
        <>
          <button
            className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
            onClick={onClickLogout}
          >
            Logout
          </button>


          {/* <pre><code>{JSON.stringify(user, null, 2)}</code></pre> */}
          <UserForm/>
        </>
      }
    </Layout>
  )
}