import "../global.css";
import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-neutral">
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </View>
  );
}
