var storage = require('node-persist');

storage.initSync();

//then start using it
storage.getItem('name')
  .then(function(value) {
    console.log(value); // yourname
    process.exit(0);
  });

  
