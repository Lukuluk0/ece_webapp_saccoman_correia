import { supabase } from '../api/supabase'
import Layout from '../../components/Layout'
import Projectslist from '../../components/Projectslist'
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
       <Projectslist pprojects={projects}/>
       <Addproject/>
    </Layout>
   )
  }
  export async function getServerSideProps(ctx) {  // aremplacer potentiellement par getstaticprops
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