var LOG_LEVEL, Logger, configs;

Logger = require('bunyan');

if (process.env.DEBUG) {
  LOG_LEVEL = 'debug';
}

configs = {
  name: process.env.NODE_PROCESS_NAME || 'business-api',
  streams: [
    {
      stream: process.stdout,
      level: LOG_LEVEL || 'info'
    }
  ]
};

module.exports = new Logger(configs);
