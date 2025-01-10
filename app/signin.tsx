import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global_provider";
import { Redirect } from "expo-router";
const signin = () => {
  const {isLoggedIn,refetch,loading}=useGlobalContext()

  if (!loading && isLoggedIn) return <Redirect href="/" />;

  const handleLogin=async()=>{
    const result=await login()
    if (result) {
      refetch({})
      console.log("Logged In")
    }else{
      Alert.alert("Error","Login Failed")
    }
  }
  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        
        <View className="px-10 mt-72">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome To Dwellio
          </Text>

          <Text className="text-3xl font-rubikSemiBold text-black-300 text-center mt-2">
            Find Your Way to Your  {"\n"}
            <Text className="text-primary-300">Dream Home</Text>
          </Text>

          <TouchableOpacity className="bg-white shadow-lg shadow-zinc-300 rounded-full w-full py-4 mt-8"
             onPress={handleLogin}>
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
