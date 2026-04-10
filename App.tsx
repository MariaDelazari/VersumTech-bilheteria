import React, {Component} from "react";
import {View, Text } from "react-native";
import { Login } from "./src/pages/Login";

export default function App (){
  return(
    <View style={{ flex: 1 }}>

      <Login  />
      
    </View>
  );
}

