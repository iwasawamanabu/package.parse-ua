import { isTouchDevice } from './touch-device';

/* ipadの判別
--------------------------------------------------------------------------*/
export const ipadDetection = (ua) => {
  if (/ipad|macintosh/i.test(ua) && isTouchDevice()) {
    return true;
  }
};
