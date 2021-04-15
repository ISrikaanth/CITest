// /* eslint-disable global-require */
// /* eslint-disable import/no-dynamic-require */
// const Agenda = require('agenda');
// const path = require('path');
// const logger = require('./logger');
// const { mongo } = require('./vars');

// /**
//  * Agenda Setup
//  */
// const agenda = new Agenda({ db: { address: mongo.uri, collection: 'jobs', options: { useNewUrlParser: true } } });
// // Find all jobs
// require('fs').readdirSync(path.join(__dirname, '../api', 'jobs')).forEach((file) => {
//   require(path.join(__dirname, '../api', 'jobs', file))(agenda);
// });


// // agenda hooks for logging
// agenda.on('start', (job) => {
//   console.log(job.attrs.name, { status: 'start', data: job.attrs.data });
// });
// agenda.on('complete', (job) => {
//   console.log(job.attrs.name, { status: 'complete', data: job.attrs.data });
// });
// agenda.on('success', (job) => {
//   console.log(job.attrs.name, { status: 'success', data: job.attrs.data });
// });
// agenda.on('fail', (err, job) => {
//   console.log(job.attrs.name, { status: 'fail', data: job.attrs.data, error: err });
// });

// module.exports = agenda;
