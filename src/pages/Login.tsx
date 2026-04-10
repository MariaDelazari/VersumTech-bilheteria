import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Video,  ResizeMode } from "expo-av";

export function Login() {
  return (
    <View style={stylesLogin.container}>
      <Video
        source={require('../../assets/video/background-login.mp4')}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      <View style={stylesLogin.form}>
        <Text>aaaaaaaaaa</Text>

      </View>
    </View>
  );
}

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

});