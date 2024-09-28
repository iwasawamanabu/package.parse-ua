/* ブラウザの判別　//TODO:ブラウザのバージョン判別を追加
--------------------------------------------------------------------------*/
export const browserDetection = (ua) => {
  if (/edg/i.test(ua)) return 'edge';
  if (/chrome/i.test(ua)) return 'chrome';
  if (/firefox/i.test(ua)) return 'firefox';
  if (/safari/i.test(ua)) return 'safari';
  return null;
};
