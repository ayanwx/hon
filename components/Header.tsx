import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import type { TabScreenOptions } from "@/app/_layout";
import HeaderButton from "./HeaderButton";

type Props = {
  TabScreens: TabScreenOptions[];
  screen: BottomTabHeaderProps;
};

export default function Header({ TabScreens, screen }: Props) {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        display: "flex",
        width: "100%",
        height: 60,
        justifyContent: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: Colors.foreground,
            fontSize: 20,
            paddingLeft: 20,
          }}
        >
          {TabScreens.find(
            (tab) => tab.name.toLowerCase() === screen.route.name.toLowerCase(),
          )?.title || "hmm"}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          right: 20,
          flexDirection: "row",
        }}
      >
        <HeaderButton
          style={{ marginRight: 5 }}
          icon="search-sharp"
          color={Colors.foreground}
        />
        <HeaderButton
          icon="ellipsis-vertical-sharp"
          color={Colors.foreground}
        />
      </View>
    </View>
  );
}
