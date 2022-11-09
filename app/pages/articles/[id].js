import db from '../../assets/articles'
import Layout from '/components/Layout'

const Article = () => {
    console.log(paths.params.id)
    return <div>
        <Layout>
        </Layout>
    </div>
};

export async function getStaticPaths() {

    const posts = db.articles
  
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
  
   
    return { props: { post : db.articles} }
  }
  
export default Article