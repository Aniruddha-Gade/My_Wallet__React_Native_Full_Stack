import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { verticalScale } from "@/src/utils/styling";
import { Color, radius, spacingX, spacingY } from "@/src/constants/theme";
import Typo from "@/src/components/common/Typo";
import { WALLET } from "@/src/constants/Labels";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import CustomModal from "@/src/components/common/CustomModal";
import AddWalletForm from "@/src/screens/wallet/components/AddWalletForm";
import WalletCard from "@/src/screens/wallet/components/WalletCard";
import { WalletType } from "@/src/types/types";

const Wallet = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const getTotalBalance = () => {
    return 34567;
  };

  const walletData: WalletType[] = [
    {
      id: "4",
      name: "",
      credit: 15000,
      debit: 20000,
      balance: 5000,
      image:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/jammu-and-kashmir/anantnag/city/amarnath-yatra-pahalgam-jammu-1-city-search-thumb.jpeg",
      uid: "user456",
      created: new Date("2024-01-05"),
    },
    {
      id: "1",
      name: "Salary",
      credit: 5000000,
      debit: 5000000000,
      balance: 10000000,
      image:
        "https://media.istockphoto.com/id/180756294/photo/wallet.jpg?s=612x612&w=0&k=20&c=sc6I6KsEbiv9Y4BtKji8w5rBYono2X63-ipfhYk6Ytg=",
      uid: "user123",
      created: new Date("2024-03-17"),
    },
    {
      id: "2",
      name: "Mahabaleshwar Trip",
      credit: 20000,
      debit: 25000,
      balance: 5000,
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/Best-14-Things-To-Do-in-Mahabaleshwar5-hero?qlt=82&ts=1726668886303",
      uid: "user123",
      created: new Date("2024-02-10"),
    },
    {
      id: "3",
      name: "Jammu Trip",
      credit: 15000,
      debit: 20000,
      balance: 5000,
      image:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/jammu-and-kashmir/anantnag/city/amarnath-yatra-pahalgam-jammu-1-city-search-thumb.jpeg",
      uid: "user456",
      created: new Date("2024-01-05"),
    },
  ];

  return (
    <ScreenWrapper style={{ backgroundColor: Color.black }}>
      <View style={styles.container}>
        {/* balance view */}
        {/* <View style={styles.balanceView}>
          <View style={{ alignItems: "center" }}>
            <Typo size={45} fontWeight={"500"}>
              ₹{getTotalBalance()?.toFixed(2)}
            </Typo>
            <Typo size={16} color={Color.neutral400}>
              {WALLET.TOTAL_BALANCE}
            </Typo>
          </View>
        </View> */}

        {/* wallets */}
        <View style={styles.wallets}>
          {/* header */}
          <View style={styles.flexRow}>
            <Typo size={20} fontWeight="500">
              {WALLET.MY_WALLETS}
            </Typo>

            <TouchableOpacity
              style={{
                backgroundColor: Color.primary,
                borderRadius: radius._30,
              }}
              // onPress={onPlusWallet}
              onPress={() => setIsOpenModal(true)}
            >
              <CustomIcon
                name="plus"
                icon="Feather"
                color={Color.black}
                size={verticalScale(25)}
              />
            </TouchableOpacity>
          </View>

          {/* wallets list */}
          <FlatList
            data={walletData}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={styles.listStyle}
            renderItem={({ item, index }) => (
              <WalletCard wallet={item} index={index} />
            )}
          />
        </View>
      </View>

      <CustomModal
        visibility={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        heading={WALLET.ADD_WALLET}
        modalStyle={{ minHeight: "40%" }}
      >
        <AddWalletForm />
      </CustomModal>
    </ScreenWrapper>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  balanceView: {
    height: verticalScale(160),
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._10,
  },

  wallets: {
    flex: 1,
    // backgroundColor: Color.neutral800,
    // borderTopRightRadius: radius._30,
    // borderTopLeftRadius: radius._30,
    padding: spacingX._10,
    // paddingTop: spacingX._25,
  },
  listStyle: {
    paddingVertical: spacingY._25,
    paddingTop: spacingY._15,
  },
});
