import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/src/types/types";
import { Color, radius } from "@/src/constants/theme";
import { verticalScale } from "@/src/utils/styling";
import Loading from "./Loading";
import Typo from "./Typo";

const CustomButton = ({
  text,
  style,
  onPress,
  loading = false,
  textProps,
  disabled = false,
}: CustomButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, style]}>
        <Loading />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      <Typo fontWeight={"500"} {...textProps}>
        {text}
      </Typo>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius._17,
    borderCurve: "continuous",
    height: verticalScale(52),
    width: "100%",
  },
});
