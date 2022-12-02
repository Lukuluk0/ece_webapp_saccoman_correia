function Infoarticle({posts}) {
  const [posted] = posts
    return <div>
      <ul>
        <li>
          <h3>Voici l'id de l'article: {posted.id}</h3>
        </li>
        <li>
          <h3>Voici le titre de l'article: {posted.itle}</h3>
        </li>
      </ul>
    </div>
  }

 export default Infoarticle