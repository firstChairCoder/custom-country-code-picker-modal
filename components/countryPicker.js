import React from "react";
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { CloseButton } from "../svg/backButton";
import colors from "../assets/colors/colors";

export default function CountryPicker(props) {
  const renderItemView = (item) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => props.onTap(item.dial, item.img)}
          style={styles.container}
        >
          <>
            <View style={styles.leftWrapper}>{item.img}</View>

            <View style={styles.centerWrapper}>
              <Text style={styles.dial}>{item.dial}</Text>
            </View>

            <View style={styles.rightWrapper}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View>
      <Modal visible={props.isVisible}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => props.onTap("--")}
            style={styles.listHeader}
          >
            <CloseButton />
          </TouchableOpacity>
          <FlatList
            style={styles.list}
            data={props.data}
            renderItem={({ item, index }) => renderItemView(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    height: 40,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftWrapper: {
    height: 38,
    width: 38,
    borderWidth: 1,
    borderRadius: 19,
    flex: 1,
    borderColor: colors.black,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  centerWrapper: {
    flexDirection: "row",
    flex: 1.5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dial: {
    color: colors.lightPurple,
    fontSize: 14,
  },
  rightWrapper: {
    flex: 2.5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
  },
  modal: {
    flex: 1,
    backgroundColor: colors.grayBg,
  },
  listHeader: {
    position: "absolute",
    top: 20,
    left: 15,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    marginTop: 60,
  },
});
