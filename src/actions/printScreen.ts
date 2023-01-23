import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

const SCREENSHOT_SIZE = 200;

const printScreen = async (): Promise<string> => {
  const { x, y } = await mouse.getPosition();

  const screenshotRegion = new Region(
    Math.max(0, x - SCREENSHOT_SIZE / 2),
    Math.max(0, y - SCREENSHOT_SIZE / 2),
    SCREENSHOT_SIZE,
    SCREENSHOT_SIZE,
  );

  await screen.highlight(screenshotRegion);

  const screenRegion = await screen.grabRegion(screenshotRegion);

  const screenRegionRgb = await screenRegion.toRGB();
  const image = new Jimp({ ...screenRegionRgb });

  const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
  const base64Buffer = imageBuffer.toString('base64');

  return `print_scrn ${base64Buffer}`;
};

export default printScreen;
