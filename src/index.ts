import * as dotenv from 'dotenv';
import initWebSocket from './ws';

dotenv.config();

const { WSS_PORT } = process.env;

// initHttpServer(Number(HTTP_PORT));
initWebSocket(Number(WSS_PORT));
