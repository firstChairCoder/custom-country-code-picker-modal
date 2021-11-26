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

const conditionalStyle = (isFocused) => {
  return StyleSheet.create({
    textBox: {
      width: "100%",
      height: globals.SCREEN_SIZE.height * 0.075,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 6,
      flexDirection: "row",
      borderColor: isFocused ? colors.primary : colors.lineStroke,
    },
  });
};

const styles = StyleSheet.create({
  title: {
    lineHeight: 15,
    fontSize: 12,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 4,
  },
  input: {
    lineHeight: 17.5,
    fontSize: 14,
    fontWeight: "400",
    color: colors.black,
  },
  phoneWrapper: {
    width: "100%",
    height: 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.lineStroke,
    padding: 10,
    flexDirection: "row",
  },
  phoneLeft: {
    flex: 0.7,
    justifyContent: "center",
  },
  phoneRight: {
    flexDirection: "row",
    flex: 0.3,
    width: "100%",
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  pickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagWrapper: {
    width: 16.8,
    height: 12,
    justifyContent: "center",
    marginRight: 2,
  },
  code: {
    lineHeight: 15,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default PhoneBox;
