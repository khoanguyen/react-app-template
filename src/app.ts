import express from 'express';
import * as path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
  res.render('home');
});

app.listen(3333);