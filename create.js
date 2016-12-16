const fs = require('fs');

var storage = require('node-persist');

// if the directory is not there, it must be made before calling storage.initSync()
// mkdir -p .node-persist/storage
fs.mkdirSync('.node-persist/');
fs.mkdirSync('.node-persist/storage');

//you must first call storage.initSync
storage.initSync( /* options ... */ );

//then start using it
storage.setItem('name','yourname')
  .then(function() {
    return storage.getItem('name')
  })
  .then(function(value) {
    console.log(value); // yourname
  })
  .then(function() {
    storage.setItem('app', 'test-node-persist')
      .then(function() {
        console.log(':: node-persist created.'); // yourname
        process.exit(0);
      })
  })
