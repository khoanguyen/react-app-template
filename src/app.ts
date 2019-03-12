import express from 'express';
import * as path from 'path';
import ServerServices from './server-services';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res, next) => {
  res.render('home');
});

ServerServices.logger.info(`Server starts at port 3333`);

app.listen(3333);