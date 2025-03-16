import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderProps } from "@/src/types/types";
import Typo from "./Typo";
import { notEmpty } from "@/src/utils/validation";

const Header = ({
  title,
  leftIcon,
  style,
  rightIcon,
}: Readonly<HeaderProps>) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      {notEmpty(title) && (
        <Typo
          style={{
            fontSize: 22,
            fontWeight: "600",
            textAlign: "center",
            width: leftIcon ? "82%" : "100%",
          }}
        >
          {title}
        </Typo>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  leftIcon: {
    alignSelf: "flex-start",
  },
});
