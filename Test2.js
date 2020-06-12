var http = require('http');
var lanthu=0;
const PORT = process.env.PORT || 5000;
function Xulyweb (req, res) {
    lanthu++;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'
  +"<BR>http://127.0.0.1:8080/"
  +"<BR>localhost:8080"
  +"<BR>lan thu-"+lanthu);
}
http.createServer(Xulyweb).listen(PORT);
console.log("Nodejs dang run o server!");
