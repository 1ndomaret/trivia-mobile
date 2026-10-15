import { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import "../global.css";
import Logo from "../assets/android-icon-foreground.png";

const home = () => {
  const [roomCode, setRoomCode] = useState("");
  return (
    <View className="flex-1 items-center justify-center bg-neutral p-4">
      {/* <Text className="text-white">Trivia Party</Text> */}
      <Image source={Logo} className="w-64 h-64" resizeMode="contain"/>
      <View className="bg-indigo-900 p-8 justify-center rounded-md gap-4 py-12">
        <Text className="text-white text-center font-bold text-2xl">
          Join a game with a Room Code
        </Text>
        <TextInput
          value={roomCode}
          onChangeText={(text) => setRoomCode(text.toUpperCase())}
          placeholder="Enter 4 Letter Code"
          placeholderTextColor="#9ca3af"
          maxLength={4}
          className=" border border-gray-500 rounded-lg p-3 bg-neutral text-white"
        />
        <Text className="btn-primary ">Play</Text>
        <Text className="text-white text-center">or</Text>
        <Text className="text-white text-center">Sign in to create a game</Text>
        <Text className="btn-secondary">Sign In</Text>
        <Text className="text-white text-center">
          Don't have an account?{"  "}
          <Text className="text-blue-400 underline font-semibold active:opacity-70">
            click here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default home;
