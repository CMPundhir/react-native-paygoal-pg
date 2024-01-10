# rn-paygoal-pg

Paygoal payment gateway for react-native app

## Installation

For npm

```sh
npm install rn-paygoal-pg
```

For yarn

```sh
yarn add rn-paygoal-pg
```

## Usage

```js
import { PayGoalPgComponent } from 'rn-paygoal-pg';

// ...

const TestPG = () => {
  return (
    <PayGoalPgComponent
      amount="1000"
      email="test@gmail.com"
      name="Test"
      mobile="9999999999"
      orderId="ref@123"
      address="Delhi"
      pincode="110000"
      producDesc="Test Transaction"
      payId="123456789"
      salt="123456789"
    />
  );
};
```

## Props

| #Param                                 | #Type                 | #Mandatory | #Description                    |
| ------------------------------------- | -------------------- | --------- | ------------------------------ |
| style                                 | StyleProp<ViewStyle> | No        | View style prop                |
| onNavigationStateChange(webViewState) | void                 | No        | function to handle current URL |

## License

Created by BiggBrains solutions pvt. ltd.
