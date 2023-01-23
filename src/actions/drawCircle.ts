import { mouse, Point } from '@nut-tree/nut-js';
import CommandNames from '../constants/commands';

const STEP_DISTANCE = 0.01;

const drawCircle = async (name: CommandNames, args: string[]) => {
  const radius = Number(args[0]);

  const { x, y } = await mouse.getPosition();

  const centerX = x + radius;
  const centerY = y;

  const path: Point[] = [];

  for (let i = 0; i <= 2 * Math.PI; i += STEP_DISTANCE) {
    const moveX = centerX - radius * Math.cos(i);
    const moveY = centerY - radius * Math.sin(i);

    path.push(
      new Point(
        Math.round(moveX),
        Math.round(moveY),
      ),
    );
  }

  await mouse.drag(path);

  return `${name} ${radius}`;
};

export default drawCircle;
