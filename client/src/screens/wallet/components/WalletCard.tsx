import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Color, radius, spacingX } from "@/src/constants/theme";
import { verticalScale } from "@/src/utils/styling";
import { WalletType } from "@/src/types/types";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import Animated, { FadeInDown } from "react-native-reanimated";
import { notEmpty, notNullUndefined } from "@/src/utils/validation";
import { WALLET } from "@/src/constants/Labels";
import Typo from "@/src/components/common/Typo";

type WalletCardProps = {
  wallet: WalletType;
  index: number;
};

const AmountBox = ({
  amount,
  title,
}: {
  amount: number | undefined;
  title: string;
}) => {
  return (
    <View style={styles.amountBox}>
      <Text style={styles.label}>{title}</Text>
      {notNullUndefined(amount) && (
        <Text style={styles.creditAmount}>₹{amount}</Text>
      )}
    </View>
  );
};

const WalletCard = ({ wallet, index }: Readonly<WalletCardProps>) => {
  return (
    <Animated.View entering={FadeInDown.delay(index * 50).springify()}>
      <TouchableOpacity style={styles.card}>
        {/* Header - Wallet Name & Actions */}
        <View style={styles.header}>
          {notEmpty(wallet?.name) ? (
            <Typo fontWeight="600">{wallet?.name}</Typo>
          ) : (
            <Typo fontWeight="600" color={Color.red}>
              {WALLET.WALLET_NAME_NOT_FOUND}
            </Typo>
          )}
          {/* edit / delete button */}
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.iconButton, { backgroundColor: Color.green_2 }]}
            >
              <CustomIcon
                name="edit"
                icon="Feather"
                color={Color.white}
                size={16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, { backgroundColor: Color.red }]}
            >
              <CustomIcon
                name="delete"
                icon="AntDesign"
                color={Color.white}
                size={16}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Wallet Image */}
        <View style={styles.imageContainer}>
          <Image
            source={wallet?.image}
            contentFit="cover"
            transition={100}
            style={styles.image}
          />
        </View>

        {/* Amount Details - Debit, Credit & Balance */}
        <View style={styles.amountDetails}>
          <AmountBox title={WALLET.CREDIT} amount={wallet?.credit} />
          <AmountBox title={WALLET.DEBIT} amount={wallet?.debit} />
          <AmountBox title={WALLET.BALANCE} amount={wallet?.balance} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.neutral800,
    padding: spacingX._15,
    borderRadius: radius._12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: verticalScale(15),
    gap: verticalScale(10),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: spacingX._7,
  },
  iconButton: {
    backgroundColor: Color.primary,
    padding: spacingX._7,
    borderRadius: radius._6,
  },
  imageContainer: {
    // marginTop: spacingX._12,
    height: verticalScale(150),
    width: "100%",
    borderRadius: radius._12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountBox: {
    backgroundColor: Color.neutral700,
    padding: verticalScale(13),
    paddingHorizontal: verticalScale(3),
    borderRadius: radius._12,
    width: "32%",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: Color.neutral400,
  },
  debitAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.red,
  },
  creditAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.green,
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.white,
  },
});
