import { deviceDetection } from './modules/detection/device';
import { osDetection } from './modules/detection/os';
import { browserDetection } from './modules/detection/browser';
import { isTouchDevice } from './modules/detection/touch-device';
import { classControl } from './modules/class-control';

// result.
const result = {
  classes: [],
  ua: {},
};
/* -----------------------------------------------------------------------------
 * parse User Agent.
------------------------------------------------------------------------------*/
export const parseUA = () => {
  // ユーザーエージェント文字列を取得
  const UA = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (UA === 'undefined') return {};
  // 初期化
  return parseUserAgent(UA);
};

/* -----------------------------------------------------------------------------
 * ユーザーエージェント文字列を解析する関数
------------------------------------------------------------------------------*/
const parseUserAgent = (UA) => {
  // init.
  result.ua = {};
  result.ua.val = UA;
  result.classes = [];
  const ua = UA.toLowerCase();

  /* デバイスタイプの判別（デスクトップ or モバイル）
    --------------------------------------------------------------*/
  const detectedDevice = deviceDetection(ua);
  if (detectedDevice) {
    result.classes.push(`ua-${detectedDevice}`);
    result.ua.device = detectedDevice;
  }

  // タッチデバイスの判別
  if (isTouchDevice()) {
    result.classes.push('ua-touch');
    result.ua.touch = true;
  }

  /* OS の判別
    --------------------------------------------------------------*/
  const detectedOS = osDetection(ua);
  if (detectedOS) {
    result.classes.push(`ua-${detectedOS}`);
    result.ua.os = detectedOS;
  }

  /* ブラウザの判別
    --------------------------------------------------------------*/
  const detectedBrowser = browserDetection(ua);
  if (detectedBrowser) {
    result.classes.push(...detectedBrowser.classes);
    result.ua.browser = detectedBrowser.name;
    result.ua.browserVersion = detectedBrowser.version;
  }

  /* result.
    --------------------------------------------------------------*/
  classControl(result.classes);
  return result.ua;
};

/* -----------------------------------------------------------------------------
 * ユーザーエージェント情報を更新する関数
------------------------------------------------------------------------------*/
export const refreshUA = () => {
  if (result.ua.val !== navigator.userAgent) {
    result.ua.val = navigator.userAgent;
    return parseUserAgent(result.ua.val);
  }
};
