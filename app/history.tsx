import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_alt,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
