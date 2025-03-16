import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Color, spacingY } from "@/src/constants/theme";
import { isIOS } from "@/src/utils/HelperFunction";
import { verticalScale } from "@/src/utils/styling";
import { CustomIcon } from "@/src/components/common/CustomIcon";
import Typo from "@/src/components/common/Typo";

function CustomTabs({ state, descriptors, navigation }: BottomTabBarProps) {
  const tabIcons = {
    index: (isFoused: boolean) => (
      <CustomIcon
        name={isFoused ? "home" : "home-outline"}
        icon="Ionicons"
        size={20}
        color={isFoused ? Color.primary : Color.neutral400}
      />
    ),
    Statistics: (isFoused: boolean) => (
      <CustomIcon
        name="database"
        icon={isFoused ? "Entypo" : "Octicons"}
        size={20}
        color={isFoused ? Color.primary : Color.neutral400}
      />
    ),
    Wallet: (isFoused: boolean) => (
      <CustomIcon
        name={isFoused ? "wallet" : "wallet-outline"}
        icon="Ionicons"
        size={20}
        color={isFoused ? Color.primary : Color.neutral400}
      />
    ),
    Profile: (isFoused: boolean) => (
      <CustomIcon
        name={isFoused ? "user" : "user-o"}
        icon="FontAwesome"
        size={20}
        color={isFoused ? Color.primary : Color.neutral400}
      />
    ),
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            // href={buildHref(route.name, route.params)}
            key={route.name}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center",height:'100%' }}
          >
            {/* {tabIcons[route.name] ? tabIcons[route.name](isFocused) : null} */}
            {(tabIcons as Record<string, (isFoused: boolean) => JSX.Element>)[
              route.name
            ]?.(isFocused)}

            {isFocused && <Typo size={13}>{label}</Typo>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    width: "100%",
    height: isIOS() ? verticalScale(73) : verticalScale(55),
    backgroundColor: Color.neutral800,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: Color.neutral700,
    borderTopWidth: 1,
    paddingHorizontal: 10,
  },
  tabItem: {
    marginBottom: isIOS() ? spacingY._10 : spacingY._5,
    justifyContent: "center",
    alignItems: "center",
  },
});
