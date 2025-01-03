import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.background_alt,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Index() {
  return (
    <View style={styles.body}>
      <Text style={{ color: Colors.foreground, fontSize: 20 }}>
        Your Library
      </Text>
    </View>
  );
}
