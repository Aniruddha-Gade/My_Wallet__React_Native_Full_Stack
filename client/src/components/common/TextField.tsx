import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { InputProps } from "@/src/types/types";
import { verticalScale } from "@/src/utils/styling";
import { radius, spacingX } from "@/src/constants/theme";
import Typo from "./Typo";
import { notEmpty } from "@/src/utils/validation";
import { Color } from "../../constants/theme";
import { CustomIcon } from "./CustomIcon";
import { FONT_FAMILY } from "@/src/assets/fonts/FontFamily";

const TextField = ({
  label,
  value,
  onChangeText,
  error,
  icon,
  mandatory,
  isPassword,
  placeholder,
  errorMessage,

  containerStyle,
  labelStyle,
  inputStyle,
  inputRef,
  editable = true,
}: Readonly<InputProps>) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View>
      {notEmpty(label) && (
        <View style={styles.labelContainer}>
          <Typo style={[labelStyle, { fontSize: 15,fontWeight:'500' }]}>{label}</Typo>
          {mandatory && (
            <Typo style={{ fontSize: 12, color: Color.red }}>*</Typo>
          )}
        </View>
      )}

      <View style={[styles.container, containerStyle, {opacity: editable ? 1 : 0.4}]}>
        {icon && icon}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={Color.neutral400}
          ref={inputRef ?? null}
          secureTextEntry={isPassword && !showPassword}
          editable={editable}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.eyeIcon}
          >
            {showPassword ? (
              <CustomIcon
                name="eye-outline"
                icon="Ionicons"
                size={24}
                color={Color.neutral100}
              />
            ) : (
              <CustomIcon
                name="eye-off-outline"
                icon="Ionicons"
                size={24}
                color={Color.neutral100}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(54),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.neutral300,
    borderRadius: radius._17,
    borderCurve: "continuous",
    paddingHorizontal: spacingX._10,
    gap: spacingX._10,
    width:'100%'
  },
  input: {
    flex: 1,
    color: Color.white,
    fontSize: verticalScale(14),
  },
  eyeIcon: {
    marginRight: 15,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 8,
  },
  error: {
    fontFamily: FONT_FAMILY.POPPINS_REGULAR,
    fontSize: 11,
    lineHeight: 14,
    textAlign: "left",
    color: Color.red,
    paddingLeft: 5,
  },
});
