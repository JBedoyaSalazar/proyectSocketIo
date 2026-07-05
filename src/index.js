import express from 'express';
import { createServer } from 'http';
import path from 'path';
import routes from './routes/index.js';
import realTimeServer from './realTimeServer.js';

const app = express();
const server = createServer(app);


app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve('src', 'views'));

app.use(routes);

app.use(express.static(path.resolve('src', 'public')));

server.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

realTimeServer(server);
