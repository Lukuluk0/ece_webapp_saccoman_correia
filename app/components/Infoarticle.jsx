function Infoarticle({posts}) {
  console.log(posts)
  const [posted] = posts //deconstruction 
  
    return <div>
      <ul>
        <li>
          <h3>Voici l'id de l'article: {posted.id}</h3>
        </li>
        <li>
          <h3>Voici le titre de l'article: {posted.title}</h3>
        </li>
      </ul>
    </div>
  }

 export default Infoarticle