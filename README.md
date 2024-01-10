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
      amount="10000" // amount should be in paisa only i.e. 10000 paisa for transaction of 100 rupees
      email="test@gmail.com"
      name="Test"
      mobile="9999999999"
      orderId="ref@123"
      address="Delhi"
      pincode="110000"
      producDesc="Test Transaction"
      payId="123456789"
      salt="123456789"
      onComplete = () => {
        // onComplete will be invoked in both cases failed or success
        // your code here
      }
    />
  );
};
```

## Props

| Param         | Type                 | Mandatory | Description                                                             |
| :------------ | :------------------- | :-------- | :---------------------------------------------------------------------- |
| style         | StyleProp<ViewStyle> | No        | View style prop                                                         |
| onComplete()  | void                 | No        | Function to handle onComplete of payment                                |
| scrollEnabled | boolean              | No        | Weather the SDK view will be scrollable or not                          |
| amount        | string               | Yes       | Amout of transaction (in Paisa only)                                    |
| email         | string               | Yes       | Email of user                                                           |
| name          | string               | Yes       | Name of user                                                            |
| mobile        | string               | Yes       | Mobile of user                                                          |
| orderId       | string               | Yes       | Unique refrence ID                                                      |
| address       | string               | Yes       | Address of user                                                         |
| pincode       | string               | Yes       | Pincode of user's address                                               |
| producDesc    | string               | Yes       | Product Description                                                     |
| payId         | string               | Yes       | PayId provided by the PayGoal payment gateway team                      |
| salt          | string               | Yes       | Salt string for encryption provided by the PayGoal payment gateway team |

## Git Repository

https://github.com/CMPundhir/react-native-paygoal-pg.git

## Developed By

BiggBrains Solutions Pvt. Ltd.

## License

MIT
