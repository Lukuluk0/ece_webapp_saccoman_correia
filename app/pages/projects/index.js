import db from '../../assets/articles'
import Layout from '../../components/Layout'
import Test_projectslist from '../../components/Test_projectslist'


export default function Articles({posts}) {
  
    return <div> 
      <Layout>
       <Test_projectslist></Test_projectslist>
    </Layout>
    </div>
  }
/*
  export async function getStaticProps() {
    return {
      props: {
        posts: db.articles
      },
    }
  }
*/