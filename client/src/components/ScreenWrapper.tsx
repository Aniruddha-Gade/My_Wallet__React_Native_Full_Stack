import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HEIGHT } from "@/src/utils/HelperFunction";
import { ScreenWrapperProps } from "@/src/types/types";
import { Color } from "@/src/constants/theme";

const ScreenWrapper = ({ style, children }: Readonly<ScreenWrapperProps>) => {
  const paddingTop = Platform.OS === "ios" ? HEIGHT * 0.06 : 30;
  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: Color.neutral900,
        },
        style,
      ]}
    >
      <StatusBar barStyle={"dark-content"} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
