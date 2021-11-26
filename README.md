# Custom-Country-Code-Picker-Modal

## Screen Demo


https://user-images.githubusercontent.com/66207244/143595668-a83d4df8-bead-4455-b425-d838863cfe23.mp4

Android

## Introduction
 A simple, lightweight country-code picker that can be customized to fit whatever portion of the screen in your app.

## Installation
Use `yarn` or `npm install` to install the required dependencies.

## Basic Usage
This is basically an expansion of the example currently in **App.js**
```js
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { CountryCodes } from "../util/countryCodes";
import globals from "./globals";
import { NG } from "./flags";
import CountryPicker from "./countryPicker";

import colors from "../assets/colors/colors";

const PhoneBox = ({ onChangeText }) => {
  const [countryCodePicker, setCountryCodePicker] = useState(false);
  const [mobile, setMobile] = useState(null);

  const [isFocused, setIsFocused] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState("--");
  const [selectedCountryFlag, setSelectedCountryFlag] = useState(<NG />);

  const onUserTyped = (e) => {
    setMobile(e);
    onChangeText(e);
  };

  return (
    <View style={[conditionalStyle(isFocused).textBox]}>
      <View style={styles.phoneLeft}>
        <Text style={styles.title}>Phone number</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={mobile}
          placeholder="Please enter your number"
          keyboardType="number-pad"
          onChangeText={onUserTyped}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          setCountryCodePicker(true);
        }}
        style={styles.phoneRight}
      >
        <View style={styles.pickerWrapper}>
          <View style={styles.flagWrapper}>{selectedCountryFlag}</View>
          <Text style={styles.code}>{selectedCountryCode}</Text>

          <CountryPicker
            onTap={(item, item2) => {
              setSelectedCountryCode(item);
              setCountryCodePicker(false);
              setSelectedCountryFlag(item2);
            }}
            data={CountryCodes}
            isVisible={countryCodePicker}
          />
          <Entypo name="chevron-small-down" size={24} color={colors.black} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
```
## Props
A full list of props is to be updated on this markdown by the maintainer in due time.

## Future additions/optimizations:
1. Custom views.
1. Full number support for phone numbers. This includes proper formatting and other validation methods.
1. Support of extra theme(s).
1. Auto detection of select countries on input of first few digits.
1. Fast scrolling.

*Ultimately*, the aim is to improve its usability while retaining it's portability in an absolute form.

Made with ❤️

...still optimizing, please.
