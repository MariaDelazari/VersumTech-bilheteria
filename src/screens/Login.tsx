import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RootStackParamList } from "../routes/AppRoutes";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }

    navigation.navigate("Events");
  }

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

      <View style={styles.overlay} />

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

        <Button title="Entrar" onPress={handleLogin} />

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

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
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
    marginBottom: 5,
  },

  logo: {
    width: 210,
    height: 95,
    marginRight: 10,
  },

  title: {
    fontSize: 22,
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