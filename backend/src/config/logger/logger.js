const DailyRotateFile = require('winston-daily-rotate-file');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf, colorize, simple } = format;

// eslint-disable-next-line no-shadow
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level.toUpperCase()}: ${message}`);

const AllTransports = ({ maxSize, maxFiles, enableConsoleLog }) => {
  // Add/Modify your own log files based on level
  const logTypes = ['ERROR', 'INFO', 'HTTP'];
  return [
    ...logTypes.map((tlogs) => {
      return new DailyRotateFile({
        name: `${tlogs} Logs`,
        filename: `./src/logs/${tlogs.toLowerCase()}logs/${tlogs.toLowerCase()}-%DATE%.log`,
        format: combine(format((info) => (info.level === tlogs.toLowerCase() ? info : false))(), timestamp(), myFormat),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize,
        maxFiles,
        json: true,
        colorize: false,
      });
    }),
    new transports.Console({
      silent: !enableConsoleLog,
      json: false,
      colorize: true,
      format: format.combine(colorize(), simple()),
    }),
  ];
};

const logger = (log) =>
  createLogger({
    silent: !log.enableLog,
    level: log.debugMode ? log.debugMode : 'info',
    exitOnError: false,
    format: combine(timestamp(), myFormat),
    transports: AllTransports(log),
  });

module.exports = logger;
