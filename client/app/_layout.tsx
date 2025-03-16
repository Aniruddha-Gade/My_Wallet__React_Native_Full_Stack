import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import * as Updates from "expo-updates";

const ReloadButton = () => {
  const reloadApp = async () => {
    try {
      await Updates.reloadAsync(); // Reload the app programmatically
    } catch (error) {
      Alert.alert("Error", "Failed to reload the app");
    }
  };

  return (
    <View style={{ position: "absolute", bottom: 50, right: 20, zIndex: 999 }}>
      <Button title="Reload" onPress={reloadApp} />
    </View>
  );
};

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(modals)/ProfileModal"
        options={{ presentation: "modal" }}
      />
    </Stack>
  );
};

const _layout = () => {
  return (
    <>
     <StackLayout/>

      {/* 🔄 Global Reload Button */}
      {/* <ReloadButton /> */}
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
