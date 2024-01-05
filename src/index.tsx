// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }
import React from 'react';
import { Text, View } from 'react-native';

export const index = (a: number, b: number) => {
  return (
    <View
      style={{ backgroundColor: '#0f0f0f', width: '100%', paddingVertical: 24 }}
    >
      <Text>First number is :- {a}</Text>
      <Text>Second number is :- {b}</Text>
      <Text>Multiply of both number is :- {a * b}</Text>
    </View>
  );
};
