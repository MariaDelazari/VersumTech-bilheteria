import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function EventDetails() {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* IMAGEM */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          
          <Text style={styles.title}>Festival de Tecnologia 2026</Text>

          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>25 de Abril de 2026</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>São Paulo - SP</Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="access-time" size={20} color="#8A2BE2" />
            <Text style={styles.infoText}>19:00 - 23:00</Text>
          </View>

          {/* DESCRIÇÃO */}
          <Text style={styles.section}>Sobre o evento</Text>

          <Text style={styles.description}>
            Um evento incrível com palestras, workshops e networking com
            profissionais da área de tecnologia. Ideal para quem quer aprender,
            crescer e fazer conexões importantes no mercado.
          </Text>

        </View>
      </ScrollView>

      {/* BOTÃO FIXO */}
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Participar</Text>
        </Pressable>
      </View>

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

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});