import React from 'react';
import { StyleSheet, View } from 'react-native';

import PhoneBox from './components/phoneBox';
import colors from "./assets/colors/colors"

export default function App() {
  return (
    <View style={styles.container}>
      <PhoneBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
