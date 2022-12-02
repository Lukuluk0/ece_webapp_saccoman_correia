import db from '../../assets/articles'
import Layout from '/components/Layout'
import Infoarticle from '/components/Infoarticle'
// pour valider SSG faire un npm run build
const Article = ({post}) => {

    return <div>
        <Layout>
          <Infoarticle id={post.id} title={post.title}/>;
        </Layout>
    </div>
};


export async function getStaticPaths() {

    const posts = db.articles
  
    const paths = posts.map((post) => ({
      params: { id: post.id }
    }))
    return { paths, fallback: false }
  }
  
  
  export async function getStaticProps({params}) {
    return { props: { post : db.articles.find(articles => articles.id === params.id)} }
  }

export default Article