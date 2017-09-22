const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.set('port', (process.env.PORT || 5432));
app.use(express.static(path.join(__dirname, '..', 'build')));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// To keep API awake
setInterval(() => {
  axios.get('http://api.basketballreasons.io/static/data/calendar/playoffs_2017.json').then(() => {
    console.log('Kept API alive');
  }).catch(() => {
  	console.log('API is down');
  })
})