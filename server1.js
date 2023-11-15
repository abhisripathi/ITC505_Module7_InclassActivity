//      Comment 4 
//We wrote server-side scripts to create and retrieve cookies. 
// Cookies are small pieces of data stored in the user's browser. 
// Our script creates cookies to save user information like names and email addresses. 
// Then, another script retrieves these cookies for subsequent user sessions. 
// This is a common practice in web development for user authentication and data persistence across sessions.

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
    let user = req.cookies['user'];
    res.send(`Cookie Retrieved: ${user}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
