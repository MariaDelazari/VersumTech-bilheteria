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
          onPress={() => navigation.navigate("Listing")}
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
    bottom: "16%",
    alignSelf: "center",

    width: "90%",
    padding: 26,

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
    width:215,
    height: 95,
  },
  

title: {
  fontSize: 20
,
  color: "#FFFFFF",
  textAlign: "center",
  marginBottom: 6,
  fontWeight: "600",
  letterSpacing: 1
},

  forgot: {
    color: "#ccc",
    marginBottom: 22,
    marginTop: 11,
    fontSize: 13,
  },

 
  signup: {
    color: "#ccc",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
  },

  link: {
    color: "#fff",
    fontWeight: "600",
    textDecorationLine: 'underline',
    fontSize: 14,
    
  },
});