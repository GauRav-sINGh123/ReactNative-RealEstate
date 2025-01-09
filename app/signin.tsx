import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
const signin = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Image
          source={images.onboarding}
          className="w-full h-4/6 mt-4"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To Real Dwellio
          </Text>

          <Text className="text-3xl font-rubikSemiBold text-black-300 text-center mt-2">
            Find Your Way to Your  {"\n"}
            <Text className="text-primary-300">Dream Home</Text>
          </Text>

          <TouchableOpacity className="bg-white shadow-lg shadow-zinc-300 rounded-full w-full py-4 mt-14">
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubikMedium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
