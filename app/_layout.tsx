import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import * as NavigationBar from "expo-navigation-bar";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  NavigationBar.setBackgroundColorAsync(Colors.background);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarShowLabel: false,
        headerTintColor: Colors.accent,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        tabBarStyle: {
          backgroundColor: Colors.background,
          height: 55,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{
                padding: 5,
              }}
              name={"home-sharp"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{
                padding: 5,
              }}
              name={"search-sharp"}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{
                padding: 5,
              }}
              name={"bookmark-sharp"}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
