import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Events } from "../screens/Events";
import Event from "../screens/Event";
import { Login } from "../screens/Login";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";

export type RootStackParamList = {
  Login: undefined;
  Events: undefined;
  Event: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}