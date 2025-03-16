import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TextField from "@/src/components/common/TextField";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import { Color } from "@/src/constants/theme";
import { Controller } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import CustomButton from "@/src/components/common/CustomButton";
import { HOME } from "@/src/constants/Labels";
import Typo from "@/src/components/common/Typo";
import Animated, { FadeInDown } from "react-native-reanimated";

const LoginForm = () => {
  const { control, handleSubmit, onLogin, loading, route } = useLogin();

  return (
    <Animated.View style={styles.loginForm} entering={FadeInDown.duration(500)}>
      {/* email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextField
            mandatory
            label={HOME.EMAIL}
            value={value}
            onChangeText={(val) => {
              onChange(val);
            }}
            placeholder={HOME.LOGIN_PLACEHOLDER}
            icon={
              <CustomIcon
                name="email"
                icon="Entypo"
                size={20}
                color={Color.primary}
              />
            }
          />
        )}
      />

      {/* password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <TextField
            mandatory
            label={HOME.PASSWORD}
            value={value}
            isPassword
            onChangeText={(val) => {
              onChange(val);
            }}
            placeholder={HOME.PASSWORD_PLACEHOLDER}
            icon={
              <CustomIcon
                name="key"
                icon="Entypo"
                size={20}
                color={Color.primary}
              />
            }
          />
        )}
      />

      {/* forgot password */}
      <TouchableOpacity onPress={() => route.push("/(auth)/ForgotPassword")}>
        <Typo style={styles.forgotPassword}>{HOME.FORGOT_PASSWORD}</Typo>
      </TouchableOpacity>

      {/* login */}
      <CustomButton
        loading={loading}
        text="Login"
        onPress={handleSubmit(onLogin)}
        style={{ marginVertical: 15 }}
        textProps={styles.loginText}
      />

      {/* sign up */}
      <View style={styles.footer}>
        <Typo size={15}>{HOME.DONT_HAVE_ACCOUNT}</Typo>

        <TouchableOpacity onPress={() => route.push("/(auth)/SignUp")}>
          <Typo style={styles.signUp}>{HOME.SIGN_UP}</Typo>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginForm: {
    marginTop: 10,
    gap: 15,
  },
  loginText: {
    color: Color.black,
    fontWeight: "800",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  signUp: {
    fontSize: 15,
    alignSelf: "flex-end",
    color: Color.primary,
  },
  forgotPassword: {
    fontSize: 14,
    alignSelf: "flex-end",
    color: Color.text,
  },
});
