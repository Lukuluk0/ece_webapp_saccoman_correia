import db from '../../assets/articles'


export default function Articles({props}) {
    return <div> 
        <ul>
      {props.posts.map((articles) => (
        <li>{props.posts.title}</li>
      ))}
    </ul>

    </div>
  }

  export async function getStaticProps() {
    return {
      props: {
        posts: db.articles
      },
    }
  }
