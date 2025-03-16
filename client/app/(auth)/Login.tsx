import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, spacingX, spacingY } from "@/src/constants/theme";
import { verticalScale } from "@/src/utils/styling";
import { HOME } from "@/src/constants/Labels";
import ScreenWrapper from "./../../src/components/ScreenWrapper";
import BackButton from "@/src/components/common/BackButton";
import Typo from "@/src/components/common/Typo";
import LoginForm from "@/src/screens/auth/components/LoginForm";
import Animated, { FadeInDown } from "react-native-reanimated";

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />

        <Animated.View style={{ marginTop: verticalScale(5) }} entering={FadeInDown.duration(500)} >
          <Typo size={30} fontWeight={"800"}>
            {HOME.HEY_WELCOME_BACK}
          </Typo>
          <Typo
            style={{ fontSize: 16, color: Color.textLighter, marginTop: 5 }}
          >
            {HOME.LOGIN_NOW_TO_TRACK}
          </Typo>
        </Animated.View>

        {/* form */}
        <LoginForm />
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: Color.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: Color.text,
  },
  footerTexts: {
    textAlign: "center",
    color: Color.text,
    fontSize: verticalScale(15),
  },
});
