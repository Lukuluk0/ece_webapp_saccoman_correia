import db from '../../assets/articles'
import Layout from '../../components/Layout'
import Listarticle from '../../components/Listarticle'


export default function Articles({posts}) {
  
    return <div> 
      <Layout>
        <Listarticle posted={posts}/>
    </Layout>
    </div>
  }

  export async function getStaticProps() {
    return {
      props: {
        posts: db.articles
      },
    }
  }
