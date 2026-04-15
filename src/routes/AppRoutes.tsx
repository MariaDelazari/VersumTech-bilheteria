import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Events } from "../screens/Events";
import Event from "../screens/Event";
import { Login } from "../screens/Login";
import Profile  from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}