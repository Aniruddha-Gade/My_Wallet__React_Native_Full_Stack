import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import useAddWallet from "../hooks/useAddWallet";
import TextField from "@/src/components/common/TextField";
import { WALLET } from "@/src/constants/Labels";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import { Color, radius, spacingX } from "@/src/constants/theme";
import CustomButton from "@/src/components/common/CustomButton";
import { defaultWalletValues } from "../constants";
import { WalletDataType } from "@/src/types/types";
import { verticalScale } from "@/src/utils/styling";
import SelectImage from "@/src/components/common/SelectImage";

type AddWalletForm = {
  isEdit?: boolean;
  walletData?: WalletDataType;
};

const AddWalletForm = ({
  isEdit = false,
  walletData = defaultWalletValues,
}: Readonly<AddWalletForm>) => {
  const { control, handleSubmit, onSubmit, onDeleteWallet, watch, setValue } =
    useAddWallet({
      isEdit,
      walletData,
    });

  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        name="walletName"
        render={({ field: { value, onChange } }) => (
          <TextField
            mandatory
            label={WALLET.WALLET_NAME}
            value={value}
            onChangeText={(val) => {
              onChange(val);
            }}
            placeholder={WALLET.ENTER_WALLET_NAME}
            icon={
              <CustomIcon
                name={"wallet-outline"}
                icon="Ionicons"
                size={20}
                color={Color.primary}
              />
            }
          />
        )}
      />

      {/* image */}
      <Controller
        control={control}
        name="image"
        render={({ field: { value, onChange } }) => (
          <View>
            <SelectImage
              file={value}
              onSelect={onChange}
              onClear={() => onChange("")}
              placeholder="Uploada an image"
              containerStyle={{ height: verticalScale(250) }}
              imageStyle={{ width: "100%", height: verticalScale(250) }}
            />
          </View>
        )}
      />

      <View style={styles.footer}>
        {isEdit && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onDeleteWallet}
          >
            <CustomIcon
              name="delete"
              icon="AntDesign"
              color={Color.white}
              size={verticalScale(29)}
            />
          </TouchableOpacity>
        )}

        <CustomButton
          text={isEdit ? WALLET.UPDATE_WALLET : WALLET.ADD_WALLET}
          textProps={{ color: Color.black }}
          style={{ flex: 1 }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default AddWalletForm;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "space-between",
    // height:'100%',
    flex: 1,
    gap: 10,
  },
  deleteButton: {
    backgroundColor: Color.red,
    borderRadius: radius._10,
    paddingHorizontal: spacingX._15,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
