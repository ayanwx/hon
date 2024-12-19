import Header from "@/components/Header";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import * as NavigationBar from "expo-navigation-bar";

export type TabScreenOptions = {
  name: Lowercase<string>;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function TabLayout() {
  NavigationBar.setBackgroundColorAsync(Colors.background);

  const TabScreens: TabScreenOptions[] = [
    {
      name: "index",
      title: "Library",
      icon: "home-sharp",
    },
    {
      name: "history",
      title: "History",
      icon: "time-sharp",
    },
    {
      name: "discover",
      title: "Discover",
      icon: "compass-sharp",
    },
    {
      name: "to_read",
      title: "To-Read",
      icon: "bookmark-sharp",
    },
    {
      name: "settings",
      title: "Settings",
      icon: "settings-sharp",
    },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        tabBarShowLabel: false,
        headerTintColor: Colors.accent,
        headerShadowVisible: false,
        header: (screen) => {
          return <Header TabScreens={TabScreens} screen={screen} />;
        },
        tabBarStyle: {
          backgroundColor: Colors.background,
          height: 55,
        },
      }}
    >
      {TabScreens.map((screen) => {
        return (
          <Tabs.Screen
            name={screen.name}
            options={{
              title: screen.title,
              tabBarIcon: ({ color }) => (
                <Ionicons
                  style={{
                    padding: 5,
                  }}
                  name={screen.icon}
                  color={color}
                  size={20}
                />
              ),
            }}
            key={screen.name}
          />
        );
      })}
    </Tabs>
  );
}
