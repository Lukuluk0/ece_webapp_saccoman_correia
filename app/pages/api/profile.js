const connect = true
const user = {username: 'alexcmr', 
              email:'alexaxndre.correia@edu.ece.fr',
              connection: connect}

export default function profile(req, res) {
    res.status(200).json(user)
    console.log(user)
    res.end()
  }
  