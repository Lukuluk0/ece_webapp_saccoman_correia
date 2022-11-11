import db from '../../assets/articles'
import Layout from '/components/Layout'

const Article = (post) => {

    return <div>
        <Layout>
          <ul>
            <li>{post.post.id}</li>
            <li>{post.post.title}</li>
          </ul>
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