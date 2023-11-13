//File Name: server.js, Student Name: Aqeish Parvez, Student ID: 301225795, Web App Name: COMP229-MIDTERM-301225795

import debug from 'debug';
debug('comp-229');
import http from 'http';
import { HttpError} from 'http-errors';

import app from './server/config/app.js';

const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
    var port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
};

function onError(error) 
{
  if (error.syscall !== 'listen') 
  {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() 
{
  let addr = server.address();
  let bind = 'pipe ' + addr;
  debug('Listening on ' + bind);
}
