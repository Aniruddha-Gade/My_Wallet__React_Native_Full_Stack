import { Image, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { Color } from "../src/constants/theme";
import splashScreenImg from "../src/assets/images/splashImage.png";
import { useFocusEffect, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        router.push("./(tabs)");
      }, 1000);
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* <ImageComponent
                source={splashScreenImg}
                imageStyle={styles.splashImg}
            /> */}

      <Image source={splashScreenImg} style={styles.splashImg} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  splashImg: {
    height: "20%",
    aspectRatio: 1,
  },
});
