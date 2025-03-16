import { StyleSheet, View } from "react-native";
import React from "react";

import { Color, spacingY } from "../constants/theme";
import { ModalWrapperProps } from "../types/types";
import { isIOS } from "../utils/HelperFunction";

const ModalWrapper = ({
  style,
  children,
  bg = Color.neutral800,
}: ModalWrapperProps) => {
  return (
    <View style={[styles.container, { backgroundColor: bg }, style && style]}>
      {children}
    </View>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIOS() ? spacingY._15 : 50,
    paddingBottom: isIOS() ? spacingY._20 : spacingY._10,
  },
});
