
function Infoarticle({pproject}) {
  
    return <div>
      <ul>
        <li>
          <h3>Voici l id de l article: {pproject.id}</h3>
        </li>
        <li>
          <h3>Voici le titre de l article: {pproject.title}</h3>
        </li>
      </ul>
    </div>
  }

 export default Infoarticle