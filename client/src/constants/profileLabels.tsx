import { CustomIcon } from "../components/common/CustomIcon";
import { accountOptionType } from "../types/types";
import { HOME } from "./Labels";
import { Color } from "./theme";

export const AccountOptions: accountOptionType[] = [
  {
    title: HOME.EDIT_PROFILE,
    icon: (
      <CustomIcon
        name="edit"
        icon="FontAwesome"
        color={Color.white}
        size={20}
      />
    ),
    routeName: "/(modals)/ProfileModal",
    bgColor: "#6366f1",
  },
  {
    title: HOME.SETTINGS,
    icon: (
      <CustomIcon
        name="settings-sharp"
        icon="Ionicons"
        color={Color.white}
        size={20}
      />
    ),
    // routeName: "/(modals)/profileModal",
    bgColor: Color.green,
  },
  {
    title: HOME.PRIVACY_POLICY,
    icon: (
      <CustomIcon
        name="privacy-tip"
        icon="MaterialIcons"
        color={Color.white}
        size={20}
      />
    ),
    // routeName: "/(modals)/profileModal",
    bgColor: Color.neutral600,
  },
  {
    title: HOME.LOGOUT,
    icon: (
      <CustomIcon
        name="logout"
        icon="MaterialIcons"
        color={Color.white}
        size={20}
      />
    ),
    routeName: "/(modals)/profileModal",
    bgColor: Color.red,
  },
  // {
  //   title: "",
  //   icon: <CustomIcon name="" icon="" color={Color.white} size={20} />,
  //   routeName: "/(modals)/profileModal",
  //   bgColor: "#6366f1",
  // },
];

export const TempIcon = () => {
  return (
    <CustomIcon
      name="iconfontdesktop"
      icon="AntDesign"
      color={Color.white}
      size={20}
    />
  );
};
