import db from '../../assets/articles'
import Layout from '../../components/Layout'
import Link from "next/link"

export default function Articles({posts}) {
    return <div> 
      <Layout>
        <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={'/articles/' + post.id}>
        <li>{post.title}</li>
        </Link>
        </div>
      ))}
    </ul>
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
