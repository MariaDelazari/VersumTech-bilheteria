import React, {Component} from "react";
import {View } from "react-native";

import { Login } from "./src/screens/Login";
import { Events } from "./src/screens/Events";

export default   function App (){
  return(
<View style={{ flex: 1 }} > 

 
  <Events />
</View>
  );
}

