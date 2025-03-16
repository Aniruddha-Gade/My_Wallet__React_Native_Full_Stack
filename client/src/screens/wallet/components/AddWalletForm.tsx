import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import useAddWallet from "../hooks/useAddWallet";
import TextField from "@/src/components/common/TextField";
import { WALLET } from "@/src/constants/Labels";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import { Color } from "@/src/constants/theme";
import CustomButton from "@/src/components/common/CustomButton";
import { defaultWalletValues } from "../constants";
import { WalletDataType } from "@/src/types/types";

type AddWalletForm = {
  isEdit?: boolean;
  walletData?: WalletDataType;
};

const AddWalletForm = ({
  isEdit=false,
  walletData = defaultWalletValues,
}: Readonly<AddWalletForm>) => {
  const { control, handleSubmit, onSubmit } = useAddWallet({isEdit,walletData});

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

      <CustomButton
        text={isEdit ? WALLET.UPDATE : WALLET.ADD}
        textProps={{ color: Color.black }}
        onPress={handleSubmit(onSubmit)}
      />
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
});
