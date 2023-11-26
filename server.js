const express = require('express');
const data = require('./data');
const app = express();
const port = 8000; // Choose any available port you prefer

app.get('/', (req, res) => {
   res.json(data);
   
});

app.listen(process.env.PORT || port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
