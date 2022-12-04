import db from '../../assets/articles'
import Layout from '/components/Layout'
import {Infoarticle} from '/components/Infoarticle'
import { useRouter } from "next/router";
// pour valider SSG faire un npm run build
const Article = ({post}) => {
  const router = useRouter();
    console.log(router);
    return <div>
        <Layout>
          <Infoarticle posts={post}/>;
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
    return { props: { post : db.articles.filter(articles => articles.id === params.id)} }
  }

export default Article