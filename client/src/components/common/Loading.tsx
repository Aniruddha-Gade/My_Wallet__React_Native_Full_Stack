import { View, Text } from "react-native";
import React from "react";
import { Color } from "@/src/constants/theme";
import { ActivityIndicatorProps } from "@/src/types/types";

const Loading = ({
  size = "large",
  color = Color.primary,
}: ActivityIndicatorProps) => {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
