import { ipadDetection } from './ipad';

/* OS の判別 //TODO:OSのバージョン判別を追加
--------------------------------------------------------------------------*/
export const osDetection = (ua) => {
  if (/win/i.test(ua)) return 'windows';
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipod/i.test(ua)) return 'ios';
  // iPadOS の判別（UA と touch 機能の有無で判断）
  if (ipadDetection(ua)) {
    return 'ipados';
  }
  if (/mac/i.test(ua)) return 'macos';
  return null;
};
