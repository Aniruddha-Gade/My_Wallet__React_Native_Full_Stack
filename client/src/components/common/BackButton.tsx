import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BackButtonProps } from "@/src/types/types";
import { useRouter } from "expo-router";
import { CustomIcon } from "./CustomIcon";
import { Color, radius } from "@/src/constants/theme";

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  const route = useRouter();
  return (
    <TouchableOpacity
      onPress={() => route.back()}
      style={[styles.button, style]}
    >
      <CustomIcon
        name="chevron-back"
        icon="Ionicons"
        size={iconSize}
        color={Color.white}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.neutral700,
    alignSelf: "flex-start",
    borderRadius: radius._12,
    borderCurve: "continuous",
    padding: 5,
  },
});
