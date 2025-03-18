import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

type AddWalletForm = {
  isEdit?: boolean;
  walletData?: WalletDataType;
};

const AddWalletForm = ({
  isEdit = false,
  walletData = defaultWalletValues,
}: Readonly<AddWalletForm>) => {
  const { control, handleSubmit, onSubmit, onDeleteWallet } = useAddWallet({
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

      <View style={styles.footer}>
        {isEdit && (
          <TouchableOpacity style={styles.deleteButton} onPress={onDeleteWallet}>
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
  },
  deleteButton: {
    backgroundColor: Color.red,
    // padding: verticalScale(5),
    borderRadius: radius._10,
    paddingHorizontal: spacingX._15,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
