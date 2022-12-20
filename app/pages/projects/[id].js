import Project_action from '../../components/Project_action.jsx'
import Infoarticle from '../../components/Infoarticle'
import Layout from '../../components/Layout'
import { supabase } from '../api/supabase'
import AddComment from '../../components/AddComment'
import ListComment from '../../components/ListComment'


// pour valider SSG faire un npm run build
const Project = ({project}) => {
    return <>
        <Layout>
          <Infoarticle pproject={project}/>
          <Project_action author={project.creator_id} pid={project.id}></Project_action>
          <div className="pt-2 md:mx-14 mx-6 md:mt-10 mt-5 bg-slate-200">
          <AddComment pid={project.id}/>
          <ListComment pid={project.id}/>
          </div>
        </Layout>
        </>
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