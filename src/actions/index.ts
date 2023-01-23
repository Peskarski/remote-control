import CommandNames from '../constants/commands';
import mouseMove from './mouseMove';
import getMousePosition from './mousePosition';
import drawSquare from './drawSquare';

export const actions = [
  {
    name: CommandNames.mouseUp,
    handler: mouseMove,
  },
  {
    name: CommandNames.mouseDown,
    handler: mouseMove,
  },
  {
    name: CommandNames.mouseRight,
    handler: mouseMove,
  },
  {
    name: CommandNames.mouseLeft,
    handler: mouseMove,
  },
  {
    name: CommandNames.mousePosition,
    handler: getMousePosition,
  },
  {
    name: CommandNames.drawSquare,
    handler: drawSquare,
  },
];
