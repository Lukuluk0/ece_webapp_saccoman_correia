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
          res.write("a")
        } else {
          res.write('Hello anonymous')
        }
      }
      else if (path === '/')
      {
        res.write("b");
        
      }
      else if (path === '/about') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        try{
          const about = require('./content/about')
          res.write(about.title + "\n");
          res.write(about.content+ "\n");
          res.write(about.author+ "\n");
          res.write(about.date+ "\n");
        }
        catch
        {
          console.log("le fichier JSON n'existe pas ");
        }
      }

      else{
}
      res.end();
     }
}
