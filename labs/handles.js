const url = require('url')
const qs = require('querystring')

const port = "8080"

module.exports = {
    serverHandle: (req, res) =>{
      const route = url.parse(req.url)
      const path = route.pathname 
      const params = qs.parse(route.query)
     
      res.writeHead(200, {'Content-Type': 'text/html'});
      if (path === '/hello' && 'name' in params) {
        if ((params['name']==='ALEXANDRE')||(params['name']==='LUCAS'))
        {
          res.write(profil)
        } else {
          res.write('Hello anonymous')
        }
      }
      else if (path === '/')
      {
        res.write(hello);
      }
      else{

      }  
      res.end();
     }
}
