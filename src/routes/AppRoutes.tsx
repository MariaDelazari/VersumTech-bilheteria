import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Events } from "../screens/Events";
import Event from "../screens/Event";
import { Login } from "../screens/Login";
import Profile  from "../screens/Profile";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  code: string;
  image: string;
  description: string;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Events: undefined;
  Event: {
    event: EventItem;
  };
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}