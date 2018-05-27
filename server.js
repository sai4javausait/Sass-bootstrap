//creating a Static Server

var SaticServer = require('static-server');

var server = new SaticServer({
    rootPath: './',
    port: 3000
});

server.start(function() {
    console.log("Server Started on port : "+ server.port);
    console.log("You can access the webpage here : http://localhost:"+server.port+"/");
});