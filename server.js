// A1. import express
const express = require('express');

// A2. init app
const app = express();

// A3. Import path 
const path = require('path');

// A4. Identify the port
const port = process.env.PORT || 5000;

// A6. Create the production initialization
if(process.env.NODE_ENV === 'production') {
    // A7. npm run build - to build the react app
    // A8. serve the static version from build
    app.use(express.static('build'))
    // A9. get the index.html file (end of A)
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

// A5. Create the listen module
app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log('Server running on port: ', port);
}

)