import { supabase } from '../api/supabase'
import Layout from '../../components/Layout'
import Test_projectslist from '../../components/Test_projectslist'


export default function Articles({projects}) {
    return <div> 
      <Layout>
       <Test_projectslist pprojects={projects}></Test_projectslist>
    </Layout>
    </div>
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