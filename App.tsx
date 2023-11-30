import React from 'react';
import {WebView} from 'react-native-webview';

const NextJSWebView = () => {
  return (
    <WebView
      source={{uri: 'https://jiemeng.chenshuai.dev'}}
      style={{flex: 1}}
      originWhitelist={['*']} //允许所有来源的跨域访问
      javaScriptEnabled={true}
      allowsInlineMediaPlayback={true}
      useWebKit={true}
    />
  );
};

export default NextJSWebView;
