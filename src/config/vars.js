const path = require('path');
const { name, version } = require('../../package.json');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  pkgConfig: {
    name,
    version,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  slack: {
    token: process.env.SLACK_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    webhooktoken: process.env.SLACK_WEBHOOK_TOKEN,
  },
  aws: {
    accesskey: process.env.AWS_ACCESS_KEY_ID,
    secretkey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWSBUCKET,
  },
  suremdm: {
    host: 'https://suremdm.42gears.com/',
    createJob: 'api/job',
    applyJob: 'api/jobassignment/tags',
    searchDevice: 'api/devicegrid',
    jobQueue: 'api/jobqueue',
    reApplyJobOnDevice: 'api/jobqueue',
    apikey:process.env.SUREMDMAPIKEY,
    basicauth: process.env.SUREMDMBASICAUTH,
    alphatagid: process.env.ALPHATAGID,
    betatagid: process.env.BETATAGID,
    prodtagid: process.env.PRODTAGID,
  },
};
