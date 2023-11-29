const express = require('express');
const data = require('./data');
const app = express();
const port = 8000; // Choose any available port you prefer

app.get('/', (req, res) => {
   res.json(data);
   
});

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   // You can use '*' instead of 'http://localhost:3000' to allow any origin
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

app.listen(process.env.PORT || port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
