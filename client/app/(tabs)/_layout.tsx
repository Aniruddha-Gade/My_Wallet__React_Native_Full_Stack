import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CustomTabs from "@/src/screens/home/components/CustomTabs";

const _layout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }} initialRouteName="Profile">
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Statistics"/>
      <Tabs.Screen name="Wallet" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
