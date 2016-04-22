'use strict'

const port = process.env.PORT || 3000;

const app = require('../app');

app.listen(port, (err) => {
  if(err){
    console.error(err.stack);
    throw 'Error starting the server'
  }
  
  console.log('Server running on port %s', port)
});
