#!/usr/bin/env node
/**
 * Module dependencies.
 */

import app from '../app';
import Debug from 'debug';

const debug = Debug('ats_yms:server');
import http from 'http';
import fs from 'fs';
import path from 'path';


/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server: http.Server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// wipe redis temporary keys by pattern
const bulk_delete_redis = (key_pattern: string, complete: Function): void => {
    complete();
}

bulk_delete_redis('io_id:*', (): void => {
    bulk_delete_redis('io_sid:*', (): void => {
        bulk_delete_redis('user:*/permission', (): void => {
            server.listen(port);
            server.on('error', onError);
            server.on('listening', onListening);
            console.log(`listening start on port ${port}`);
        });
    });
});


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        // @ts-ignore
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}