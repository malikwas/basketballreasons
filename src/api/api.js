import express from 'express';
import dataRouter from './data/data';
import statsRouter from './stats/stats';
const apiRouter = express.Router();

apiRouter.use('/data', dataRouter);
apiRouter.use('/stats', statsRouter);

export default apiRouter;