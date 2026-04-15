import { View, Text, StyleSheet, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Login() {
  const [email, setEmail] = useState(""); // estado para armazenar o email digitado que é atualizado toda vez que o usuário digita algo no campo de email
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      
      <Video
        source={require("../../assets/video/background-login.mp4")}
        style={StyleSheet.absoluteFill} // faz o vídeo ocupar toda a tela
        resizeMode={ResizeMode.COVER} // “preencha toda a área, mesmo que corte partes do vídeo”
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
          value={email}  // valor do campo de email que é atualizado toda vez que o usuário digita algo no campo de email, e é passado para o componente Input para que ele possa exibir o valor atualizado
          onChangeText={setEmail} // função que é chamada toda vez que o usuário digita algo no campo de email, e é passada para o componente Input para que ele possa atualizar o estado do email com o valor digitado pelo usuário
          placeholder="Digite seu email"
        />

        <Input
          title="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry //esconde a senha digitada
        />

        <Text style={styles.forgot}>Esqueçeu a senha ?</Text>

        <Button
           title="Entrar"
          onPress={() => { 
            if (!email || !senha) {
              alert("Preencha todos os campos");
              return;
            }
          }}
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
  marginBottom: 5,

  },

  logo: {
   marginRight: 10,
    width:210,
    height: 95,
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