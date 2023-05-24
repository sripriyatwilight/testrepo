const path = require('path');

require('custom-env').env(process.env.NODE_ENV, './env');

// console.log(`process.env.APP_ENV---${process.env.APP_ENV}-----`);

module.exports = {
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    env: process.env.APP_ENV || 'development',
    hostname: process.env.APP_HOSTNAME,
    uploadDir: path.join(__dirname, process.env.APP_UPLOAD_DIR) || '/public/uploads',
    adminEmail: process.env.APP_ADMIN_EMAIL,
    enableCache: parseInt(process.env.ENABLE_CACHE, 10) === 1,
  },
  log: {
    enableLog: parseInt(process.env.ENABLE_LOG, 10) === 1,
    enableConsoleLog: parseInt(process.env.ENABLE_CONSOLE_LOG, 10) === 1,
    maxSize: process.env.MAXSIZE_LOG ? process.env.MAXSIZE_LOG : '128m',
    maxFiles: process.env.MAXFILES_LOG ? process.env.MAXFILES_LOG : '14d',
    debugMode: process.env.DEBUGMODE_LOG ? process.env.DEBUGMODE_LOG : 'info',
  },
  db: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    debug: process.env.DB_DEBUG,
    poolMax: parseInt(process.env.DB_POOL_MAX, 10) || 5,
    poolMin: parseInt(process.env.DB_POOL_MIN, 10) || 0,
    poolAcquire: parseInt(process.env.DB_POOL_ACQUIRE, 10) || 15000,
    pollIdle: parseInt(process.env.DB_POOL_IDLE, 10) || 10000,
  },
};
