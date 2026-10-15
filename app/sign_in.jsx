import "../global.css";
import { useRouter, useEffect } from "expo-router";
import { Pressable, Text, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SignIn = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-neutral">
      <Pressable
        onPress={() => router.replace("/landing")}
        className="flex-row items-center p-4 pb-0 active:opacity-70 self-start z-10"
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>

      <View className="flex-1 items-center justify-center p-4 pt-0 pb-20">
        <View className="bg-base-300 p-8 justify-center rounded-md pt-12 pb-8 w-full">
          <Text className="text-white text-center font-bold text-2xl pb-4">
            Sign in to your account
          </Text>
          <Text className="text-white text-lg mb-2">Email :</Text>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#9ca3af"
            className="border border-gray-500 rounded-lg p-3 mb-4 bg-neutral text-white"
          />
          <Text className="text-white text-lg mb-2">Password :</Text>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#9ca3af"
            className="border border-gray-500 rounded-lg p-3 mb-4 bg-neutral text-white"
          />
          <Pressable className="btn-primary">
            <Text className="text-primary-content font-semibold">SIGN UP</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
