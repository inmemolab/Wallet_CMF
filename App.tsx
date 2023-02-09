import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    // userAgent="Mozilla/5.0 (Linux; Win64; x64; rv:46.0)r Gecko/20100101 Firefox/68.0"
    return (
      <View style={{flex: 1}}>
        <WebView
          userAgent={'Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.})'}
          mediaCapturePermissionGrantType={'grant'}
          useWebKit
          mediaPlaybackRequiresUserAction={false}
          geolocationEnabled={true}
          allowsInlineMediaPlayback
          bounces={true}
          javaScriptEnabled={true}
          originWhitelist={['*']}
          source={{
            uri: 'https://portal-customers-cmf-qa.azurewebsites.net/cardrequest',
          }}
          onMessage={event => {}}
          injectedJavaScript={runFirst}
        />
      </View>
    );
  }
}
