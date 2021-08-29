const config = require('./config');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

const routes = require('./routes');
app.use(routes);


app.listen(3000, () => console.log(`Server started on ${config.server.baseUrl}:${config.server.port}`));