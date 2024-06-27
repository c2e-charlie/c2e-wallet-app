import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Board = () => {
  const [statusMessage, setStatusMessage] = useState('Waiting for API call...');

  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log('Received data from web:', data);

    if (data.url.includes('vote/up')) {
      setStatusMessage(`API Called: ${data.url} with status ${data.status}`);
    }
  };

  const injectedJavaScript = `
    (function() {
      const originalFetch = window.fetch;
      window.fetch = async function(...args) {
        const response = await originalFetch.apply(this, args);
        const data = await response.clone().json();
        window.ReactNativeWebView.postMessage(JSON.stringify({
          url: args[0],
          status: response.status,
          data: data
        }));
        return response;
      };

      const originalXHR = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function(method, url) {
        this.addEventListener('load', function() {
          if (this.responseType === '' || this.responseType === 'text') {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              url: url,
              status: this.status,
              data: this.responseText
            }));
          }
        });
        originalXHR.apply(this, arguments);
      };
    })();
  `;

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.title}>c2e게시판</Text>
        <Text>{statusMessage}</Text>
      </View>
      <View style={styles.webviewContainer}>
        <WebView
          source={{ uri: 'https://www.ilbe.com/' }}
          style={styles.webview}
          onMessage={handleMessage}
          injectedJavaScript={injectedJavaScript}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  statusContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Board;
