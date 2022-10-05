const url = require('url')
const qs = require('querystring')

const port = "8080"

const profil = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <h1>Welcome in my profile page</h1>' +
'       <p>My name is Alexandre Correia, I am 21 years old and I study at ECE in SI major</p>' +
'       <p>My name is Lucas Saccoman, I am 21 years old and I study at ECE in SI major</p>'  +
'    </body>' +
'</html>'

const hello = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <h1>Voici comment hello fonctionne :</h1>' +
'       <p>Pour accéder à la page hello, il suffit de rentrer hello et votre nom dans l adresse url de la manière suivante:<br><a href="http://localhost:8080/hello?name=John">localhost:8080/hello?name=your_name</a></p>'  +
'       <p>Pour accéder à la page du créateur, appuyer sur ce lien:<br><a href="http://localhost:8080/hello?name=ALEXANDRE">localhost:8080/hello?name=ALEXANDRE</a></p>'  +
'    </body>' +
'</html>'

const error = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title></title>' +
'    </head>' + 
'    <body>' +
'       <h1>ERROR 404</h1>' +
'    </body>'  +
'</html>'
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
