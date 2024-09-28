/* ipadの判別
--------------------------------------------------------------------------*/
export const isTouchDevice = () => {
  // return 'ontouchend' in document;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  // FIXME:デバイスモード切り替え時に正しく判定されない
};
