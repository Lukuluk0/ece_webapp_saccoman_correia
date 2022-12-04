import { getStaticProps } from "../pages/articles/[id]"

function Formulaire({data}){

    const onSubmit = function(event) {
      event.preventDefault()
      const data = {datas: new FormData(event.target)}
    }
    return (
      <form onSubmit={onSubmit}>
        <h2>My form</h2>
        <div>
          <input
            type="text"
            name="login"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      
    )
  }

export default Formulaire