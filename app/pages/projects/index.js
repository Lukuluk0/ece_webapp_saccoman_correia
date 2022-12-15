import { supabase } from '../api/supabase'
import Layout from '../../components/Layout'
import Test_projectslist from '../../components/Test_projectslist'
import Link from 'next/link'
import Head from 'next/head'


export default function Projects({projects}) {

    return (
      <Layout>
        <Head>
        <title>WebTech - Projects</title>
        <meta name="description" content="WebTech projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Test_projectslist pprojects={projects}></Test_projectslist>
       <div className="mt-12 flex gap-x-4 justify-center">
                  <Link href='/projects/creation'>
                  <a className="inline-block rounded-lg bg-bleu px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-bleu hover:bg-indigo-500 hover:ring-indigo-500">
                    Add a project
                    <span className="text-white" aria-hidden="true">&rarr;</span>
                  </a>
                  </Link>
        </div>
    </Layout>
   )
  }
  export async function getStaticProps(ctx) {
    let projects = []
    let { data, error, status } = await supabase
      .from('projects')
      .select()
    if (!error) projects = data // handle errors
    return {
      props: {
        projects: projects
      }
    };
  }