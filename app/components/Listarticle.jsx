import Link from "next/link"

function Listarticle(props) {
  const{posted}=props
    return <ul>
    {posted.map((post) => (
      <div key={post.id}>
        <Link href={'/articles/' + post.id}>
      <li>{post.title}</li>
      </Link>
      </div>
    ))}
  </ul>
}

export default Listarticle