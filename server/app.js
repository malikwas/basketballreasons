const express =  require('express');
const morgan =  require('morgan');
const path =  require('path');
const cors = require('cors');
const app = express();

app.use(cors());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

module.exports = app;