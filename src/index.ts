import * as dotenv from 'dotenv';
import initWebSocket from './ws';
import { httpServer } from './http_server';

dotenv.config();

const { WSS_PORT, HTTP_PORT } = process.env;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

initWebSocket(Number(WSS_PORT));
