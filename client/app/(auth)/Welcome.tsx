import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, spacingX, spacingY } from "@/src/constants/theme";
import { verticalScale } from "@/src/utils/styling";
import { HOME } from "@/src/constants/Labels";
import welcomeImg from "../../src/assets/images/welcome.png";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
import ScreenWrapper from './../../src/components/ScreenWrapper';
import CustomButton from "@/src/components/common/CustomButton";
import Typo from "@/src/components/common/Typo";

const Welcome = () => {
  const route =useRouter()
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* login button and image */}
        <View>
          <TouchableOpacity onPress={()=>route.push('/(auth)/Login')} style={styles.loginButton}>
            <Typo fontWeight={"500"}>{HOME.SIGN_IN}</Typo>
          </TouchableOpacity>

          <Animated.Image
            entering={FadeIn.duration(1000)}
            source={welcomeImg}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Animated.View
            entering={FadeInDown.duration(1000).springify().damping(12)}
            style={{ alignItems: "center" }}
          >
            <Typo size={30} fontWeight={"800"} style={{ textAlign: "center" }}>
              {HOME.ALWAYS_TAKE_CONTROL}
            </Typo>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(100)
              .springify()
              .damping(12)}
            style={{ alignItems: "center" }}
          >
            <Typo
              size={17}
              color={Color.textLight}
              style={{ textAlign: "center" }}
            >
              {HOME.FINANCE}
            </Typo>
          </Animated.View>

          {/* button */}
          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(200)
              .springify()
              .damping(12)}
            style={styles.buttonContainer}
          >
            <CustomButton
             onPress={()=>route.push('/(auth)/Register')} 
              text={HOME.GET_START}
              textProps={{
                color: Color.black,
                fontWeight: "600",
                size: 22,
              }}
            />
          </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: Color.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});
