import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Profile from "./src/screens/Profile";
import { Events } from "./src/screens/Events";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Events />
      </View>
    </SafeAreaProvider>
  );
}

