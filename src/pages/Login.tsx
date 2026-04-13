import { View, Text, StyleSheet, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
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


      <View style={styles.form}>
         <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source={require('../../assets/image/logoVersumTech.png')}
            
            />

            
         </View>
    
        <Text style={styles.title}>Bem vindo de volta!</Text>

        <Input
          title="Email "
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

        <Text style={styles.forgot}>Esqueçeu a senha ?</Text>

        <Button
           title="Entrar"
           onPress={() => console.log("Login clicado")}
          />

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
    justifyContent: "center",
    alignItems: "center",
    
  },

  form: {
    marginVertical: 38,
    position: "absolute",
    top: "15%",
    alignSelf: "center",

    width: "88%",
    padding: 20,

    borderRadius: 20,

    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.40)",

    
  },

  logoContainer: {
  alignItems: "center",

  },


  logo: {
   marginRight: 10,
    width:210,
    height: 80,
  },
  

  title: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 25,
    fontWeight: 300,
  
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
    fontWeight: "600",
    textDecorationLine: 'underline',
    
  },
});