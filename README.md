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

| Param                                 | Type                 | Mandatory | #Description                                                            |
| :------------------------------------ | :------------------- | :-------- | :---------------------------------------------------------------------- |
| style                                 | StyleProp<ViewStyle> | No        | View style prop                                                         |
| onNavigationStateChange(webViewState) | void                 | No        | function to handle current URL                                          |
| onMessage(event)                      | void                 | No        | Function to handle SDK res                                              |
| scrollEnabled                         | boolean              | No        | weather the SDK view will be scrollable or not                          |
| amount                                | string               | Yes       | amout of transaction (in paise)                                         |
| email                                 | string               | Yes       | email of user                                                           |
| name                                  | string               | Yes       | name of user                                                            |
| mobile                                | string               | Yes       | mobile of user                                                          |
| orderId                               | string               | Yes       | unique refrence ID                                                      |
| address                               | string               | Yes       | Address of user                                                         |
| pincode                               | string               | Yes       | Pincode of user's address                                               |
| producDesc                            | string               | Yes       | Product Description                                                     |
| payId                                 | string               | Yes       | PayId provided by the PayGoal payment gateway team                      |
| salt                                  | string               | Yes       | Salt string for encryption provided by the PayGoal payment gateway team |

## License

Created by BiggBrains solutions pvt. ltd.
