import { ipadDetection } from './ipad';

/* デバイスタイプの判別（デスクトップ or モバイル）
--------------------------------------------------------------------------*/
export const deviceDetection = (ua) => {
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) || ipadDetection(ua)) {
    return 'mobile';
  } else {
    return 'desktop';
  }
};
