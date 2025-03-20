import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "@/src/utils/styling";
import Typo from "./Typo";
import { Color, radius } from "@/src/constants/theme";
import { SelectImageProps } from "@/src/types/types";
import { CustomIcon } from "./CustomIcon";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

function SelectImage({
  file = null,
  onSelect,
  onClear,
  containerStyle,
  imageStyle,
  placeholder,
}: Readonly<SelectImageProps>) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onSelect(result.assets[0].uri);
    }
  };

  return (
    <View>
      {!file && (
        <TouchableOpacity
          onPress={pickImage}
          style={[styles.inputContainer, containerStyle && containerStyle]}
        >
          <CustomIcon
            name="cloud-upload"
            icon="SimpleLineIcons"
            color={Color.neutral200}
            size={20}
          />
          {placeholder && <Typo size={15}>{placeholder}</Typo>}
        </TouchableOpacity>
      )}

      {file && (
        <View style={[styles.image, imageStyle && imageStyle]}>
          <Image
            source={file}
            style={{ flex: 1 }}
            contentFit="cover"
            transition={100}
          />
          <TouchableOpacity style={styles.deleteIcon} onPress={onClear}>
            <CustomIcon
              name="delete"
              icon="AntDesign"
              color={Color.black}
              size={verticalScale(20)}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: verticalScale(54),
    backgroundColor: Color.neutral700,
    borderRadius: radius._15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: Color.neutral500,
    borderStyle: "dashed",
  },
  image: {
    width: scale(150),
    height: scale(150),
    borderRadius: radius._15,
    borderCurve: "continuous",
    overflow: "hidden",
    resizeMode: "cover",
  },
  deleteIcon: {
    position: "absolute",
    top: scale(6),
    right: scale(6),
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: Color.neutral100,
    padding: verticalScale(5),
    borderRadius: radius._6,
  },
});

export default SelectImage;
