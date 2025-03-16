
import React, { ReactNode, } from "react";
import { ModalProps } from "react-native";
import { TextStyle, ViewStyle, TextProps, TouchableOpacityProps, TextInput, StyleProp } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
};

export type TypoProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: any | null;
  style?: StyleProp<TextStyle>;
  textProps?: TextProps;
};

export interface CustomButtonProps extends TouchableOpacityProps {
  text: string,
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  textProps?: {}
}

export type ActivityIndicatorProps = {
  size?: string,
  color?: string
}

export type BackButtonProps = {
  style?: ViewStyle;
  iconSize?: number;
};

export interface InputProps {
  label?: string;
  value: string | number;
  onChangeText: (text: string) => void;
  editable?: boolean,
  error?: string;
  icon?: ReactNode;
  mandatory?: boolean,
  isPassword?: boolean,
  placeholder?: string;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: StyleProp<TextStyle>;
  inputRef?: React.RefObject<TextInput>;
}

export type HeaderProps = {
  title?: string;
  style?: ViewStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type accountOptionType = {
  title: string;
  icon: ReactNode;
  bgColor: string;
  routeName?: any;
};

export type ModalWrapperProps = {
  style?: ViewStyle;
  children: ReactNode;
  bg?: string;
};

export type ModalPropsType = ModalProps & {
  visibility: boolean;
  heading: string;
  withInput?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
};


export type WalletDataType = {
  walletName: string;
  image: string;
};