//          Comment 3
// We've set up a simple server using Node.js. This server listens for requests on different URL paths. 
// When someone visits http://localhost:8080/home, our server responds with 'Welcome to Home Page'. 
// If the URL path is not recognized, it sends back 'Page Not Found'. 
// This demonstrates how server-side programming can handle different requests and send appropriate responses.
//node server.js
//http://localhost:8080/home
//http://localhost:8080/other
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write('Welcome to Home Page');
        res.end();
    } else {
        res.write('Page Not Found');
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
