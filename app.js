// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 12 - Creating a Server
// -------

/* This Lesson 12 App will respond to a client
URL req w a silly str mssg displayed in a browser */

// STATEMENT #01••••••••••••••
// REQ & ASSIGN THE MODULE
// create srvr via http core mod
// assign http mod to const http for futr use 
const http = require('http');

// STATEMENT #02••••••••••••••
// CREATE & ASSIGN THE SERVER
// create & assign srvr to const srvr for futr use 
// http.createServer() takes a callback fnctn as its only param 
// callback fnctn takes 2 params:
// 1 - req - request obj: incs info about th HTTP request
// 2 - res - response obj: responds to client-req w desired HTTP server-resp back to client 
const server = http.createServer(function(req, res){

// STATEMENT #03••••••••••••••
// TEST MSSG: th req's URL property 
console.log('\nClient made this request: ' + req.url, '\n');

// STATEMENT #04••••••••••••••
// CREATE HEADER FOR REQ & RES HTTP INFO
// 200 or 404 status & txt, html or json content type
res.writeHead(200, {'Content-Type': 'text/plain'});

// STATEMENT #05••••••••••••••
// END SRVR'S RESP
// end resp & display str in browser body
  res.end('Hello Ninjas!');
});

// REVIEW
// server now declared & assigned & will:
// 1-utilize HTTP's req & res objs
// 2-create header to inform browser of resp's status & content-type
// 3-end th resp & send resp to client-browser via res.end('Hey Ninjas!');

// STATEMENT #06••••••••••••••
// TELL SRVR TO LISTEN FOR CLIENT REQ
// REMEMBER: this app doesnt make th req, th client-browsr's URL does
// listen for req on URL's port number 3000 & IP address
server.listen(3000, '127.0.0.1');

// STATEMENTS #07 - #12••••••••••••••
// TEST MSSGS
console.log("\n•••••••••••••••••••");
console.log("\nLesson 12 app now listening on port 3000");
console.log("•••••••••••••••••••");
console.log("\nREMEMBER - NO $ CMND PROMPT IN CONSOLE?\nTHEN SERVER IS STILL LISTENING FOR A REQ");
console.log("\nEXIT NODEJS ENVIRONMENT VIA CNTRL C");
console.log("•••••••••••••••••••\n");