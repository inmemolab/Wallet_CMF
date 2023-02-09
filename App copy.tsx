import React, {Component} from 'react';
import {NativeModules, NativeEventEmitter, Button, View} from 'react-native';

import {MetaMapRNSdk} from 'react-native-metamap-sdk';

export default class App extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  componentDidMount() {
    //set listening callbacks
    const MetaMapVerifyResult = new NativeEventEmitter(
      NativeModules.MetaMapRNSdk,
    );
    MetaMapVerifyResult.addListener('verificationSuccess', data =>
      console.log(data),
    );
    MetaMapVerifyResult.addListener('verificationCanceled', data =>
      console.log(data),
    );
  }

  //call showFlow when button is clicked
  handleMetaMapClickButton = () => {
    //set 3 params clientId (cant be null), flowId, metadata
    var yourMetadata = {fixedLanguage: 'es'};

    MetaMapRNSdk.showFlow(
      '63e45d97aa76be001bd2eefb',
      '63e45d97aa76be001bd2eefa',
      yourMetadata,
    );
  };

  //Add button to view graph
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'powderblue',
        }}>
        <Button onPress={this.handleMetaMapClickButton} title="Click here" />
      </View>
    );
  }
}



<WebView          //   userAgent='Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Safari/{WebKit Rev}'          userAgent='Mozilla/5.0 (Linux; Win64; x64; rv:46.0)r Gecko/20100101 Firefox/68.0'          mediaCapturePermissionGrantType={'grantIfSameHostElsePrompt'}          mediaPlaybackRequiresUserAction={true}          geolocationEnabled={true}          allowsInlineMediaPlayback          bounces={true}          javaScriptEnabled={true}          originWhitelist={['*']}          source={{ uri: 'https://portal-customers-cmf-qa.azurewebsites.net/cardrequest' }}          injectedJavaScript={jsRun}        />