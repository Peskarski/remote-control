import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import CommandNames from '../constants/commands';

const getMousePosition = async (name: CommandNames, _args: string[], ws: Duplex) => {
  const mousePosition = await mouse.getPosition();

  const result = `${name} ${mousePosition.x},${mousePosition.y}`;

  ws.write(result);

  return result;
};

export default getMousePosition;
