import express from 'express';
import * as path from 'path';
import ServerServices from './server-services';
import { clientConfig } from './client-config-middleware';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(clientConfig('/conf/client'));

app.get('/*', (req, res, next) => {
  ServerServices.logger.info(req.url);
  ServerServices.logger.info(ServerServices.config.getConfig('env'));
  res.render('home');
});

ServerServices.logger.info(`Server starts at port 3333`);

app.listen(3333);