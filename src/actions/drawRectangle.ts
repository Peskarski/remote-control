import {
  up, right, down, left, mouse,
} from '@nut-tree/nut-js';
import CommandNames from '../constants/commands';

const drawRectangle = async (name: CommandNames, args: string[]) => {
  const width = Number(args[0]);
  const height = Number(args[1]) || width;

  await mouse.drag(right(width));
  await mouse.drag(down(height));
  await mouse.drag(left(width));
  await mouse.drag(up(height));

  return `${name} ${width} ${height}`;
};

export default drawRectangle;
