const express = require('express')
import handlebars from './../node_modules/handlebars/lib/handlebars/compiler/parser';
const morgan = require('morgan')
import { engine } from 'express-handlebars';

const app = express()
const port = 3000

app.use(morgan('combined'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/tin-tuc', (req, res) => {
  res.send('hi World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})