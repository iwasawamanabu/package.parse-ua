# package.parse-ua
This module parses the user agent string and returns the result in the form of CSS classes and an object.
htmlタグにデスクトップorモバイル、OS、ブラウザ情報のclassを付与します。

## install
```
npm install @lf-dev/parse-ua
```

## 使用方法
```
import { parseUA } from '@lf-dev/parse-ua';
parseUA();
```

parseUA()は、取得した情報をオブジェクト形式でreturnしているので、
JavaScriptで情報を使用したい場合には、変数に格納してください。
```
const ua = parseUA();
```


### 情報を更新したい場合
```
import { refreshUA } from '@lf-dev/parse-ua';
ua = refreshUA();
```
