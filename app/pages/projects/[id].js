
import Infoarticle from '/components/Infoarticle'
import Layout from '../../components/Layout'
import { supabase } from '../api/supabase'


// pour valider SSG faire un npm run build
const Project = ({project}) => {
    return <div>
        <Layout>
          <Infoarticle pproject={project}/>;
        </Layout>
    </div>
};

export default Project

export async function getStaticProps(ctx) {
  let project = {}
  let { data, error, status } = await supabase
    .from('projects')
    .select()
    .eq('id', ctx.params.id)
    .single()
  if (!error) project = data // handle errors
  return {
    props: {
      project: project
    }
  };
}

export async function getStaticPaths(ctx) {
  let projects = []
  let { data, error, status } = await supabase
    .from('projects')
    .select(`id`)
  if (!error) projects = data // handle errors
  return {
    paths: projects.map( project => `/projects/${project.id}`),
    fallback: false
  };
}