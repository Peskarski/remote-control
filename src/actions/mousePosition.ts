import { mouse } from '@nut-tree/nut-js';
import CommandNames from '../constants/commands';

const getMousePosition = async (name: CommandNames) => {
  const mousePosition = await mouse.getPosition();

  const result = `${name} ${mousePosition.x},${mousePosition.y}`;

  return result;
};

export default getMousePosition;
