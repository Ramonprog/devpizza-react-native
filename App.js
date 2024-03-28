import { View, StatusBar } from "react-native";
import { SignIn } from "./src/pages/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#1d1d2e"
        barStyle="light-content"
        translucent={false}
        style="auto"
      />
      <Routes />
    </NavigationContainer>
  );
}
