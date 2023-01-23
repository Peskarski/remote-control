import {
  up, right, down, left, mouse,
} from '@nut-tree/nut-js';
import CommandNames from '../constants/commands';

const commandsByNames = {
  [CommandNames.mouseUp]: up,
  [CommandNames.mouseDown]: down,
  [CommandNames.mouseRight]: right,
  [CommandNames.mouseLeft]: left,
};

const mouseMove = async (command: CommandNames, args: string[]) => {
  const direction = commandsByNames[command as keyof typeof commandsByNames];
  const distance = args[0];

  await mouse.move(direction(parseInt(distance, 10)));

  return direction.name;
};

export default mouseMove;
