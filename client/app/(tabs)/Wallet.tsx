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
import { isArrayLength } from "@/src/utils/validation";
import WalletCard from "@/src/screens/wallet/components/WalletCard";

const Wallet = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const getTotalBalance = () => {
    return 34567;
  };

  const walletData = [
    {
      id: "1",
      walletName: "Salary",
      image:
        "https://media.istockphoto.com/id/180756294/photo/wallet.jpg?s=612x612&w=0&k=20&c=sc6I6KsEbiv9Y4BtKji8w5rBYono2X63-ipfhYk6Ytg=",
    },
    {
      id: "2",
      walletName: "mahabaleshwar trip",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/Best-14-Things-To-Do-in-Mahabaleshwar5-hero?qlt=82&ts=1726668886303",
    },
    {
      id: "3",
      walletName: "Jammu Trip",
      image:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/jammu-and-kashmir/anantnag/city/amarnath-yatra-pahalgam-jammu-1-city-search-thumb.jpeg",
    },
    {
      id: "1",
      walletName: "Salary",
      image:
        "https://media.istockphoto.com/id/180756294/photo/wallet.jpg?s=612x612&w=0&k=20&c=sc6I6KsEbiv9Y4BtKji8w5rBYono2X63-ipfhYk6Ytg=",
    },
    {
      id: "2",
      walletName: "mahabaleshwar trip",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/Best-14-Things-To-Do-in-Mahabaleshwar5-hero?qlt=82&ts=1726668886303",
    },
    {
      id: "3",
      walletName: "Jammu Trip",
      image:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/jammu-and-kashmir/anantnag/city/amarnath-yatra-pahalgam-jammu-1-city-search-thumb.jpeg",
    },
    {
      id: "1",
      walletName: "Salary",
      image:
        "https://media.istockphoto.com/id/180756294/photo/wallet.jpg?s=612x612&w=0&k=20&c=sc6I6KsEbiv9Y4BtKji8w5rBYono2X63-ipfhYk6Ytg=",
    },
    {
      id: "2",
      walletName: "mahabaleshwar trip",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/Best-14-Things-To-Do-in-Mahabaleshwar5-hero?qlt=82&ts=1726668886303",
    },
    {
      id: "3",
      walletName: "Jammu Trip",
      image:
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/jammu-and-kashmir/anantnag/city/amarnath-yatra-pahalgam-jammu-1-city-search-thumb.jpeg",
    },
  ];

  return (
    <ScreenWrapper style={{ backgroundColor: Color.black }}>
      <View style={styles.container}>
        {/* balance view */}
        <View style={styles.balanceView}>
          <View style={{ alignItems: "center" }}>
            <Typo size={45} fontWeight={"500"}>
              ₹{getTotalBalance()?.toFixed(2)}
            </Typo>
            <Typo size={16} color={Color.neutral400}>
              {WALLET.TOTAL_BALANCE}
            </Typo>
          </View>
        </View>

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
          <View>
            <FlatList
              data={walletData}
              keyExtractor={(item) => item?.id}
              renderItem={({ item }) => <WalletCard wallet={item} />}
            />
          </View>
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
    backgroundColor: Color.neutral800,
    borderTopRightRadius: radius._30,
    borderTopLeftRadius: radius._30,
    // padding: spacingX._20,
    padding: spacingX._10,

    paddingTop: spacingX._25,
  },
  listStyle: {
    paddingVertical: spacingY._25,
    paddingTop: spacingY._15,
  },
});
