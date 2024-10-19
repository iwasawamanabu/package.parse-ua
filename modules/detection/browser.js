/* ブラウザの判別　//TODO:ブラウザのバージョン判別を追加
--------------------------------------------------------------------------*/
export const browserDetection = (ua) => {
  let browser = null;
  let version = null;

  if (/edg\/(\d+(\.\d+)?)/.test(ua)) {
    browser = 'edge';
    version = RegExp.$1;
  } else if (/chrome\/(\d+(\.\d+)?)/.test(ua)) {
    browser = 'chrome';
    version = RegExp.$1;
  } else if (/firefox\/(\d+(\.\d+)?)/.test(ua)) {
    browser = 'firefox';
    version = RegExp.$1;
  } else if (/version\/(\d+(\.\d+)?).+?safari/.test(ua)) {
    browser = 'safari';
    version = RegExp.$1;
  }

  // ブラウザ名とバージョンを返す
  if (browser && version) {
    const [majorVersion, minorVersion = '0'] = version.split('.');
    return {
      name: browser,
      version: version,
      classes: [`ua-${browser}`, `ua-${browser}-${majorVersion}`, `ua-${browser}-${majorVersion}-${minorVersion}`],
    };
  }

  return null;
};
