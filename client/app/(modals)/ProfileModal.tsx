import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color, spacingX, spacingY } from "@/src/constants/theme";
import { scale, verticalScale } from "@/src/utils/styling";
import ModalWrapper from "@/src/components/ModalWrapper";
import Header from "@/src/components/common/Header";
import { HOME } from "@/src/constants/Labels";
import BackButton from "@/src/components/common/BackButton";
import { Image } from "expo-image";
import tempProfileImg from "../../src/assets/images/aniruddha.jpg";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import TextField from "@/src/components/common/TextField";
import CustomButton from "@/src/components/common/CustomButton";

const ProfileModal = () => {
  return (
    <ModalWrapper>
      <View style={styles.container}>
        <Header
          title={HOME.UPDATE_PROFILE}
          leftIcon={<BackButton />}
          style={{ marginBottom: spacingY._10 }}
        />

        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.avatarContainer}>
            <Image
              source={tempProfileImg}
              style={styles.avatar}
              contentFit="cover"
              transition={100}
            />

            <TouchableOpacity style={styles.editIcon}>
              <CustomIcon
                name="edit"
                icon="Entypo"
                color={Color.primary}
                size={20}
              />
            </TouchableOpacity>
          </View>

          {/* input */}
          <View style={styles.inputContainer}>
            <TextField
              value="Aniruddha"
              onChangeText={() => {}}
              label={HOME.FIRST_NAME}
              editable={false}
            />
            <TextField
              value="Gade"
              onChangeText={() => {}}
              label={HOME.LAST_NAME}
              editable={false}
            />
            <TextField
              value="gade@gmail.com"
              onChangeText={() => {}}
              label={HOME.EMAIL}
              editable={false}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <CustomButton
          text={HOME.UPDATE}
          textProps={{ color: Color.black }}
        />
      </View>
    </ModalWrapper>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacingY._20,
    // paddingVertical: spacingY._30,
  },

  footer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: spacingX._20,
    gap: scale(12),
    paddingTop: spacingY._15,
    borderTopColor: Color.neutral700,
    marginBottom: spacingY._5,
    borderTopWidth: 1,
  },

  form: {
    gap: spacingY._30,
    marginTop: spacingY._15,
  },

  avatarContainer: {
    position: "relative",
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: Color.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200,
    borderWidth: 1,
    borderColor: Color.neutral500,
    // overflow: "hidden",
    // position: "relative",
  },

  editIcon: {
    position: "absolute",
    bottom: spacingY._5,
    right: "30%",
    borderRadius: 100,
    backgroundColor: Color.neutral700,
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 4,
    padding: spacingY._10,
  },
  inputContainer: {
    gap: spacingY._20,
    paddingBottom: spacingY._35,
  },
});
