const morgan = require('morgan');

const configlogger = require('./logger');
const { log } = require('../vars');

const logger = configlogger(log);

const ResponseFormat = `':status - :method :url - :response-time ms`;

const httpLogger = morgan(`ERROR: ${ResponseFormat}`, {
  skip: (req, res) => res.statusCode >= 400,
  stream: { write: (message) => logger.error(message.trim()) },
});

const performanceLogger = morgan(`Performance: ${ResponseFormat}`, {
  skip: (req, res) => {
    // eslint-disable-next-line no-underscore-dangle
    if (!req._startAt || !res._startAt) {
      // missing request and/or response start time
      return;
    }

    // calculate diff
    // eslint-disable-next-line no-underscore-dangle
    const ms = (res._startAt[0] - req._startAt[0]) * 1e3 + (res._startAt[1] - req._startAt[1]) * 1e-6;
    // eslint-disable-next-line consistent-return
    return ms.toFixed(2) < 1000;
  },
  stream: {
    write: (message) => logger.http(message.trim()),
  },
});

module.exports = {
  logger,
  httpLogger,
  performanceLogger,
};
