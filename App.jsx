import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';

function App() {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    let permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }

    const status = await check(permission);

    if (status === RESULTS.DENIED) {
      const result = await request(permission);
      console.log('Permission request result:', result);
    } else {
      console.log('Permission already granted or blocked:', status);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://jiemeng.chenshuai.dev'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
