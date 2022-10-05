const http = require('http')
const url = require('url')
const qs = require('querystring')

const mainPage = '<!DOCTYPE html>'+
'<html>'+
    '<head>'+
        '<meta charset="utf-8" />'+
        '<title>ECE AST</title>'+
    '</head>'+
    '<body>'+
        'Hello guys'+
    '</body>'+
    
'</html>'

module.exports = {
serverHandle : function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    res.writeHead(200, {'Content-Type': 'text/html'});
  
if(params['name'] == "Lucas" ){
    res.write('<!DOCTYPE html>'+
    '<html>'+
        '<head>'+
            '<meta charset="utf-8" />'+
            '<title>ECE AST</title>'+
        '</head>'+
        '<body>'+
            'Hello Creator <3 lucas le plus beau'+
        '</body>'+
        
    '</html>')
} else if (params['name'] == "Alexandre"){
    res.write('<!DOCTYPE html>'+
    '<html>'+
        '<head>'+
            '<meta charset="utf-8" />'+
            '<title>ECE AST</title>'+
        '</head>'+
        '<body>'+
            'Hello Creator <3 alexandre le plus stylé'+
        '</body>'+
        
    '</html>')
}
else if(params['name'] != null){
    res.write('<!DOCTYPE html>'+
    '<html>'+
        '<head>'+
            '<meta charset="utf-8" />'+
            '<title>ECE AST</title>'+
        '</head>'+
        '<body>'+
            'Hello '+ params['name']+
        '</body>'+
        
    '</html>')
}else if(path === '/'){
    res.write('<!DOCTYPE html>'+
    '<html>'+
        '<head>'+
            '<meta charset="utf-8" />'+
            '<title>ECE AST</title>'+
        '</head>'+
        '<body>'+
            '<a href="http://localhost:8080/?name=Lucas"> Lucas ?</a><br><a href="http://localhost:8080/?name=Alexandre">Alexandre ?</a>'+
        '</body>'+
        
    '</html>')
}else{
    res.send(404);
}

    
    
    res.end();
  
  }
}
  //res.sendStatus(404);