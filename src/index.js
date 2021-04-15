const apm = require('elastic-apm-node');

apm.start({
  active: process.env.NODE_ENV === 'production',
});

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');

const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
//mongoose.connect();

// listen to requests
app.listen(port, () => console.info(`server startedd on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
