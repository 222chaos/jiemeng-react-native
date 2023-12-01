import React from 'react';
import {WebView} from 'react-native-webview';

const NextJSWebView = () => {
  return (
    <WebView
      source={{uri: 'https://jiemeng.chenshuai.dev'}}
      style={{flex: 1}}
      originWhitelist={['*']}
    />
  );
};

export default NextJSWebView;
