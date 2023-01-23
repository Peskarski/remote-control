import {
  up, right, down, left, mouse,
} from '@nut-tree/nut-js';
import CommandNames from '../constants/commands';

const drawSquare = async (name: CommandNames, args: string[]) => {
  const sideSize = Number(args[0]);

  await mouse.drag(right(sideSize));
  await mouse.drag(down(sideSize));
  await mouse.drag(left(sideSize));
  await mouse.drag(up(sideSize));

  return name;
};

export default drawSquare;
