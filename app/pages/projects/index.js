import { supabase } from '../api/supabase'
import Layout from '../../components/Layout'
import Test_projectslist from '../../components/Test_projectslist'
import Addproject from '../../components/Addproject'
import Head from 'next/head'


export default function Projects({projects}) {
  
    return (
      <Layout>
        <Head>
        <title>WebTech - Projects</title>
        <meta name="description" content="WebTech projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Test_projectslist pprojects={projects}/>
       <Addproject/>
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