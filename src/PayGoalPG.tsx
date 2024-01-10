import * as React from 'react';
import type { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import { PixelRatio } from 'react-native';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { sha256 } from 'react-native-sha256';
import { ActivityIndicator } from 'react-native';

export interface PayGoalPgComponentProp {
  style?: StyleProp<ViewStyle>;
  onComplete?(): void;
  scrollEnabled?: boolean;
  amount: string;
  email: string;
  name: string;
  mobile: number;
  orderId: string;
  address: string;
  pincode: string;
  producDesc: string;
  payId: string;
  salt: string;
}

export const PayGoalPgComponent = function PayGoalPgComponent(
  props: PayGoalPgComponentProp
) {
  const {
    style,
    onComplete,
    scrollEnabled = true,
    amount,
    email,
    name,
    mobile,
    orderId,
    address,
    pincode,
    producDesc,
    payId,
    salt,
  } = props;
  const $styles = [$webViewStyle, style];
  const [redirect, setRedirect] = React.useState(false);
  const [sdkData, setSdkData] = React.useState<any>({});
  const option2 = () => {
    let tempData: string =
      'AMOUNT=' +
      amount +
      '~CURRENCY_CODE=356~CUST_EMAIL=' +
      email +
      '~CUST_ID=~CUST_NAME=' +
      name +
      '~CUST_PHONE=' +
      mobile +
      '~CUST_STREET_ADDRESS1=' +
      address +
      '~CUST_ZIP=' +
      pincode +
      '~ORDER_ID=' +
      orderId +
      '~PAY_ID=' +
      payId +
      '~PRODUCT_DESC=' +
      producDesc +
      '~RETURN_URL=https://sandbox.paygoal.in/order/internal/nativeResponse' +
      salt;

    sha256(tempData).then((hash: string) => {
      tempData += '~HASH=' + hash.toUpperCase();
      const bodyData = `AMOUNT=${amount}&CURRENCY_CODE=356&CUST_EMAIL=${email}&CUST_ID=&CUST_NAME=${name}&CUST_PHONE=${mobile}&CUST_STREET_ADDRESS1=${address}&CUST_ZIP=${pincode}&ORDER_ID=${orderId}&PAY_ID=${payId}&PRODUCT_DESC=${producDesc}&RETURN_URL=https://sandbox.paygoal.in/order/internal/nativeResponse&HASH=${hash.toUpperCase()}`;
      setSdkData(bodyData);
      setRedirect(true);
    });
  };

  const _onNavigationStateChangeSdk = (webViewState: any) => {
    const url: string = webViewState.url;
    console.log('current url :- ', url);
    if (url === 'https://sandbox.paygoal.in/order/internal/nativeResponse') {
      if (onComplete) {
        onComplete();
      }
    }
  };

  React.useEffect(() => {
    option2();
  });

  return (
    <View style={$styles}>
      {sdkData && redirect ? (
        <WebView
          goBack={() => {}}
          source={{
            uri: 'https://www.paygoal.in/order/v1/payment',
            method: 'POST',
            body: sdkData && sdkData,
          }}
          style={$styles}
          scrollEnabled={scrollEnabled}
          originWhitelist={['*']}
          onNavigationStateChange={(webViewStateChange) => {
            _onNavigationStateChangeSdk(webViewStateChange);
          }}
          // onMessage={(_evt) => {
          //   setRedirect(false);
          // }}
        />
      ) : (
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
const $webViewStyle: ViewStyle = {
  flex: 1,
  height: PixelRatio.getFontScale() * Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};
