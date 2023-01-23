import CommandNames from '../constants/commands';
import mouseMove from './mouseMove';
import getMousePosition from './mousePosition';
import drawRectangle from './drawRectangle';
import drawCircle from './drawCircle';
import printScreen from './printScreen';

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
    handler: drawRectangle,
  },
  {
    name: CommandNames.drawRectangle,
    handler: drawRectangle,
  },
  {
    name: CommandNames.drawCircle,
    handler: drawCircle,
  },
  {
    name: CommandNames.printScreen,
    handler: printScreen,
  },
];
