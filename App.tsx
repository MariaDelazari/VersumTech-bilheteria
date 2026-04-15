import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Profile from "./src/screens/Profile";
import EventDetails from "./src/screens/Event";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <EventDetails/>
      </View>
    </SafeAreaProvider>
  );
}

