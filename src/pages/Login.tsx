import { View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import { Input } from "../components/Input";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      
      {/* 🎥 VÍDEO DE FUNDO */}
      <Video
        source={require("../../assets/video/background-login.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        isMuted
      />

      {/* 🔮 FORMULÁRIO */}
      <View style={styles.form}>
        <Text style={styles.logo}>SHRUHH</Text>
        <Text style={styles.title}>Welcome Back</Text>

        <Input
          title="Email address"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
        />

        <Input
          title="Password"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <Text style={styles.forgot}>Forget Password?</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>

        <Text style={styles.signup}>
          Are you new? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    position: "absolute",
    top: "20%",
    alignSelf: "center",

    width: "85%",
    padding: 20,

    borderRadius: 20,

    // 🔮 glass effect
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  logo: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 2,
  },

  title: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  forgot: {
    color: "#ccc",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 13,
  },

  button: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  signup: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
  },

  link: {
    color: "#fff",
    fontWeight: "bold",
  },
});