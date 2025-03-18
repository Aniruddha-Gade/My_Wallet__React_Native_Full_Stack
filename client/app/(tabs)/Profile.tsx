import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { Color, radius, spacingX, spacingY } from "@/src/constants/theme";
import { verticalScale } from "@/src/utils/styling";
import Typo from "@/src/components/common/Typo";
import Header from "@/src/components/common/Header";
import BackButton from "@/src/components/common/BackButton";
import { Image } from "expo-image";
import avatarImage from "../../src/assets/images/aniruddha.jpg";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import { isArrayLength, notEmpty } from "@/src/utils/validation";
import Animated, { FadeInDown } from "react-native-reanimated";
import { HOME } from "@/src/constants/Labels";
import { AccountOptions, TempIcon } from "@/src/constants/profileLabels";
import { useRouter } from "expo-router";

const Profile = () => {
  const name = "Aniruddha Gade";
  const email = "gadeaniruddha2@gmail.com";
  const router = useRouter();

  const logoutAlert = () => {
    Alert.alert(HOME.CONFIRM, HOME.SURE_LOGOUT, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => console.log("Logout"),
        style: "destructive",
      },
    ]);
  };

  const handlePress = (title: string, routeName: string) => {
    if (title === HOME.LOGOUT) {
      logoutAlert();
    } else if (notEmpty(routeName)) {
      router.push(routeName as any);
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <Header title="Profile" leftIcon={<BackButton />} />

        {/* user info */}
        <View style={styles.userInfo}>
          {/* avatar */}
          <View>
            <Image
              source={avatarImage}
              style={styles.avatar}
              contentFit="cover"
              transition={100}
            />
          </View>

          {/* name & email */}
          <View style={styles.nameContainer}>
            <Typo
              style={{
                fontSize: 24,
                color: Color.neutral100,
                fontWeight: "600",
              }}
            >
              {name}
            </Typo>
            <Typo
              style={{
                fontSize: 15,
                color: Color.neutral400,
              }}
            >
              {email}
            </Typo>
          </View>
        </View>

        {/* acccount options */}
        {isArrayLength(AccountOptions) && (
          <View style={styles.accountOptions}>
            {AccountOptions.map((item, index) => {
              if (!item?.title) return null; // Skip if title is empty

              return (
                <Animated.View
                  entering={FadeInDown.delay(index * 50)
                    .springify()
                    .damping(14)}
                  key={index.toString()}
                  style={styles.listItem}
                >
                  <TouchableOpacity
                    style={styles.flexRow}
                    onPress={() => handlePress(item?.title, item?.routeName)}
                  >
                    {/* icon */}
                    <View
                      style={[
                        styles.listIcon,
                        { backgroundColor: item?.bgColor },
                      ]}
                    >
                      {item?.icon ?? <TempIcon />}
                    </View>
                    <Typo style={{ fontSize: 16, fontWeight: "500", flex: 1 }}>
                      {item?.title}
                    </Typo>
                    <CustomIcon
                      name="angle-right"
                      icon="FontAwesome"
                      color={Color.white}
                      size={20}
                    />
                  </TouchableOpacity>
                </Animated.View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(10),
    alignItems: "center",
    gap: spacingY._15,
  },
  avatarContainer: {
    alignSelf: "center",
    position: "relative",
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: Color.neutral300,
    width: verticalScale(135),
    height: verticalScale(135),
    borderRadius: 200,
  },
  editIcon: {
    position: "absolute",
    bottom: 5,
    right: 8,
    borderRadius: 50,
    backgroundColor: Color.neutral100,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: 5,
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: "center",
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: Color.neutral500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius._15,
    borderCurve: "continuous",
  },
  listItem: {
    marginBottom: verticalScale(17),
  },
  accountOptions: {
    marginTop: spacingY._20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._10,
  },
});
