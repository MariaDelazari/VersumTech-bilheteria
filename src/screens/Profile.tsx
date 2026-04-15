import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";

export default function Profile({ navigation }: any) { 
  return (
    <SafeAreaView style={styles.safe}>
  
        <LinearGradient
          colors={["#8A2BE2", "#620faf", "#4c1d95"]}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>Meu perfil</Text>
          <Text style={styles.heroSubtitle}>Conta e preferências</Text>
        </LinearGradient>

     
        <View style={styles.sheet}>
          
         
          <View style={styles.avatarWrap}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=3" }}
              style={styles.avatar}
            />
            <View style={styles.avatarRing} />
          </View>

          <Text style={styles.name}>João Silva</Text>
          <Text style={styles.email}>joao@email.com</Text>
          <Text style={styles.meta}>Membro desde 2024</Text>

     
        <Button
          title="Sair"
          style={styles.signOut}
          textStyle={styles.signOutText}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })}
        />

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f0f2f7",
  },

  hero: {
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 72,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  heroTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
  },

  heroSubtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "rgba(255,255,255,0.85)",
  },

  sheet: {
    marginTop: -52,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  avatarWrap: {
    marginTop: -56,
    marginBottom: 12,
  },

  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
  },

  avatarRing: {
    position: "absolute",
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  email: {
    marginTop: 4,
    fontSize: 15,
    color: "#64748b",
  },

  meta: {
    marginTop: 6,
    fontSize: 13,
    color: "#94a3b8",
  },

  signOut: {
    marginTop: 18,
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#fecaca",
    backgroundColor: "#fff5f5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  signOutText: {
    color: "#dc2626",
    fontWeight: "700",
    fontSize: 16,
  },
});