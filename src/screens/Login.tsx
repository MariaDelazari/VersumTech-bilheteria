import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Input } from "../components/Input";
import { Button } from "../components/Button";




export function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/video/background-login.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      <View  />

      <View style={styles.form}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/image/logoVersumTech.png")}
            resizeMode="contain"
            
          />
        </View>

        <Text style={styles.title}>Bem-vindo de volta!</Text>

        <Input
          title="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />

        <Input
          title="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <Text style={styles.forgot}>Esqueceu a senha?</Text>

        <Button title="Entrar" onPress={() => navigation.navigate("Events")} />

        <Text style={styles.signup}>
          Não tem conta? <Text style={styles.link}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },


  form: {
    width: "90%",
    padding: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    
  },

  logoContainer: {
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 100,  
    marginLeft: -10,
    
  },

  title: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  forgot: {
    color: "#fff",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 18,
    textAlign: "right",
    textDecorationLine: "underline",
    fontWeight: "600",
  },

  signup: {
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    marginTop: 18,
    fontSize: 14,
  },

  link: {
    color: "#fff",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});