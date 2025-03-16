import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Typo from "@/src/components/common/Typo";
import { Image } from "expo-image";
import { Color } from "@/src/constants/theme";

const WalletCard = ({ wallet }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        backgroundColor: Color.neutral700,
        borderRadius: 20,
        padding: 5,
      }}
    >
      <Image
        source={wallet?.image}
        contentFit="cover"
        transition={100}
        style={{
          width: "20%",
          height: "20%",
          aspectRatio: 1,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: Color.neutral500,
        }}
      />
      <Typo>{wallet?.walletName}</Typo>
    </TouchableOpacity>
  );
};

export default WalletCard;

const styles = StyleSheet.create({});
