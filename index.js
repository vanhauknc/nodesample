var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World12 Ken! dep trai vcl"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
