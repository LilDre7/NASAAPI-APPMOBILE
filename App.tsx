import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={Platform.OS === "android" && styles.container__plaform}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1b4c",
  },
  container__plaform: {
    paddingTop: 55,
    paddingHorizontal: 16,
  },
});
