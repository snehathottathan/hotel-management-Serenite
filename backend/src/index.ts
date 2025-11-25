import app from './app';

import connection from './config/db';
import config from './config/config';

import startServer from './server';


// Database connection
connection(config).connectToMongo();

// Start the server
startServer();
