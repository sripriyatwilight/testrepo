// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Custom Requires
const { sequelize } = require('../models');
const config = require('./config/vars');
const { logger, httpLogger, performanceLogger } = require('./config/logger/morgan');

// routes Requires
const userRoutes = require('./routes/v1/index');

const app = express();
app.use(httpLogger);
app.use(performanceLogger);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', userRoutes);

sequelize
  .sync({ logging: false })
  .then(() => {
    logger.info('DB Connection Successfully testing hook1');
    app.listen(config.app.port, () => {
      logger.info(`Listening to port ${config.app.port}`);
    });
  })
  .catch(() => {
    logger.info('DB Connection Error');
  });
