import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';
import { actions } from '../actions';
import CommandNames from '../constants/commands';

const initWebSocket = (port: number) => {
  const wss = new WebSocketServer({ port });

  wss.on('connection', (webSocket: WebSocket) => {
    console.log(`WebSocket server is working on ${wss.options.port} port`);

    const wsStream = createWebSocketStream(webSocket, {
      decodeStrings: false,
      encoding: 'utf8',
    });

    wsStream.on('data', async (fullCommand: string) => {
      console.log(`Command: ${fullCommand}`);
      const [commandName, ...args] = fullCommand.split(' ');

      const action = actions.find((a) => a.name === commandName);

      const result = await action?.handler(commandName as CommandNames, args, wsStream);
      wsStream.write(result);
    });
  });
};

export default initWebSocket;
