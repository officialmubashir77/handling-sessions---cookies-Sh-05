const express = require('express');
const app = express();
const port = 3000;

// middleware to parse JSON requests
app.use(express.json()); // readable line of your post data
app.use(express.urlencoded({extended : true }));


// middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});


// routes about , home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// routes about users
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
  ]);
});



// listen server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});