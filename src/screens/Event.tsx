import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useCart } from "../contexts/CartContext";
import { Menu } from "../components/Menu";



export default function Event({ route, navigation }: any) {
  const { event } = route.params;
  const { addItem, hasItem } = useCart();
  const alreadyInCart = hasItem(event.id);

  return (



    <SafeAreaView style={styles.container}>
      
        <Image source={{ uri: event.image }} style={styles.image} />

        <View style={styles.content}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </Pressable>

          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>{event.date}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>{event.location}</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="access-time" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>{event.time}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="ticket-outline" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>{event.code}</Text>
          </View>

          <Text style={styles.section}>Sobre o evento</Text>

          <Text style={styles.description}>{event.description}</Text>
        </View>
     

      <View style={styles.footer}>
        <Pressable
          style={[styles.button, alreadyInCart && styles.buttonDisabled]}
          onPress={() => {
            addItem(event);
            navigation.navigate("Cart");
          }}
        >
          <Text style={styles.buttonText}>
            {alreadyInCart ? "JÁ ESTÁ NO CARRINHO" : "GARANTIR INGRESSO"}
          </Text>
        </Pressable>
      </View>
      <Menu />
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },
  image: {
    width: "100%",
    height: 260,
  },
  content: {
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#555",
  },
  section: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "700",
    color: "#8A2BE2",
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  button: {
    backgroundColor: "#8A2BE2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#6d28d9",
    opacity: 0.85,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});