const express =  require('express');
const app = require('./app');
const apiRouter = require('./api/api');

const PORT = process.env.PORT || 4321;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use('/api', apiRouter);
app.use('/static', express.static(__dirname + '/static'));