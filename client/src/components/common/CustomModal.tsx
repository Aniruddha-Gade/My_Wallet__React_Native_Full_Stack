import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Color, spacingX } from "@/src/constants/theme";
import { isIOS } from "@/src/utils/HelperFunction";
import Typo from "./Typo";
import { CustomIcon } from "./CustomIcon";
import { ModalPropsType } from "@/src/types/types";

const CustomModal = ({
  visibility,
  heading,
  withInput,
  children,
  onClose,
  modalStyle = {},
  ...rest
}: ModalPropsType) => {
  const ModalContent = (
    <Pressable
      style={[styles.modalContent, modalStyle]}
      onPress={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* heading, close button */}
      <View style={styles.flexRow}>
        <Typo fontWeight="700">{heading}</Typo>
        <TouchableOpacity onPress={onClose}>
          <CustomIcon
            name="close"
            icon="SimpleLineIcons"
            color={Color.primary}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true} // Hides scroll bar for better UI
        bounces={false} // Prevents unwanted bouncing effect
      >
        {children}
      </ScrollView>
    </Pressable>
  );

  return (
    <Modal
      visible={visibility}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      {...rest}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        {withInput ? (
          <KeyboardAvoidingView
            style={styles.centeredView}
            behavior={isIOS() ? "padding" : "height"}
          >
            {ModalContent}
          </KeyboardAvoidingView>
        ) : (
          <View style={styles.centeredView}>{ModalContent}</View>
        )}
      </Pressable>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Dim background

  },
  centeredView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: Color.neutral800,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    maxHeight: "80%",
    minHeight: "50%",
  },
  scrollView: {
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    // alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._10,
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 10,
  },
});
