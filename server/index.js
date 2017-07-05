const app = require('./app');
const apiRouter = require('./api/api');

const PORT = process.env.PORT || 4321;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use('/api', apiRouter);