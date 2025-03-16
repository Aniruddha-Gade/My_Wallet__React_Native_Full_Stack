import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { TypoProps } from "@/src/types/types";
import { verticalScale } from "@/src/utils/styling";
import { Color } from "@/src/constants/theme";

const Typo = ({
  size,
  color = Color.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textstyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
  };
  return (
    <Text style={[textstyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Typo;

const styles = StyleSheet.create({});
