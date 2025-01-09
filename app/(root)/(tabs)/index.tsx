import {  View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Link href="/signin">Signin</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
   
     
    </View>
  );
}
