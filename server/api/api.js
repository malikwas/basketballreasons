const express = require('express');
const dataRouter = require('./data/data');
const statsRouter = require('./stats/stats');
const apiRouter = express.Router();

apiRouter.use('/data', dataRouter);
apiRouter.use('/stats', statsRouter);

module.exports = apiRouter;