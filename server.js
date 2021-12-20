require('dotenv').config();

const express = require("express")
const app = express()
const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log('Server running on port {PORT}'))
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'build' ));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html')); 
  });
}
