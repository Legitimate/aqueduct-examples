import { Aqueduct } from "aqueduct";
import * as ws from 'ws';
import * as yargs from 'yargs';
import * as path from 'path';

/**
 * Usage
 * 
 * yarn run-script ./examples/get-my-open-orders
 */

// WebSocket isn't natively available in global namespace in Node; use ws
(global as any).WebSocket = ws;

Aqueduct.Initialize();

let filePath: string = yargs.argv.file;
if (!filePath) {
    throw new Error('must pass --file argument');
}

if (filePath.endsWith('.ts')) {
    filePath = filePath.replace('.ts', '');
}

require(filePath + '.js');
