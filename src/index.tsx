import React from 'react';
import type { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import { PixelRatio } from 'react-native';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export interface PayGoalPgComponentProp {
  style?: StyleProp<ViewStyle>;
  url: string;
  paramData: any;
  onNavigationStateChange?(webViewState: any): void;
  onMessage?(evt: any): void;
  reqMethod?: string;
  scrollEnabled?: boolean;
}

export const PayGoalPgComponent = function PayGoalPgComponent(
  props: PayGoalPgComponentProp
) {
  const {
    style,
    url,
    paramData,
    onNavigationStateChange,
    onMessage,
    reqMethod,
    scrollEnabled = true,
  } = props;
  const $styles = [$webViewStyle, style];
  return (
    <View style={$styles}>
      <WebView
        source={{
          uri: url,
          method: reqMethod && reqMethod != null ? reqMethod : 'POST',
          body: paramData,
        }}
        style={$styles}
        scrollEnabled={scrollEnabled}
        originWhitelist={['*']}
        onNavigationStateChange={(webViewStateChange) => {
          if (onNavigationStateChange) {
            onNavigationStateChange(webViewStateChange);
          }
        }}
        onMessage={(evt) => {
          if (onMessage) {
            onMessage(evt);
          }
        }}
      />
    </View>
  );
};
const $webViewStyle: ViewStyle = {
  flex: 1,
  height: PixelRatio.getFontScale() * Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};
