import "../global.css";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../assets/android-icon-foreground.png";

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const Landing = () => {
  const [roomCode, setRoomCode] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral items-center justify-center p-4 pb-32">
      <Image source={Logo} className="w-64 h-64" resizeMode="contain" />
      <View className="bg-base-300 p-8 justify-center rounded-md gap-4 pt-12 pb-8 w-full">
        <Text className="text-white text-center font-bold text-2xl">
          Join a game with Room Code
        </Text>
        <TextInput
          value={roomCode}
          onChangeText={(text) => setRoomCode(text.toUpperCase())}
          placeholder="Enter 4 Letter Code"
          placeholderTextColor="#9ca3af"
          maxLength={4}
          className=" border border-gray-500 rounded-lg p-3 bg-neutral text-white"
        />
        <Pressable className="btn-primary">
          <Text className="text-primary-content font-semibold">Play</Text>
        </Pressable>
        <Text className="text-white text-center text-lg">or</Text>
        <Text className="text-white text-center font-semibold text-lg">
          Sign in to create a game
        </Text>
        <Pressable className="btn-secondary">
          <Text className="text-secondary-content font-semibold">Sign In</Text>
        </Pressable>
        <Text className="text-white text-center text-lg pt-4">
          Don't have an account?{"  "}
          <Text
            onPress={() => router.replace("/sign_up")}
            className="text-blue-400 text-center underline font-semibold active:text-purple-400 transition duration-75 active:scale-105 "
          >
            click here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Landing;
