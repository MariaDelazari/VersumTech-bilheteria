import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type EventsProps = {
  title?: string;
  imageUrl?: string;
  onMenuPress?: () => void;
  onSearchPress?: () => void;
};

export function Events({
  title = "Eventos",
  imageUrl = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  onMenuPress,
  onSearchPress,
}: EventsProps) {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.15)", "rgba(0,0,0,0.55)"]}
          style={styles.overlay}
        >
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.iconButton}
              activeOpacity={0.8}
              onPress={onMenuPress}
            >
              <Ionicons name="menu" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              activeOpacity={0.8}
              onPress={onSearchPress}
            >
              <Ionicons name="search" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
    
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.floatingCard}>
        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={20} color="#7C3AED" />
          <View>
            <Text style={styles.infoTitle}>120+ Eventos</Text>
            <Text style={styles.infoSubtitle}>Disponíveis hoje</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={20} color="#7C3AED" />
          <View>
            <Text style={styles.infoTitle}>Na sua região</Text>
            <Text style={styles.infoSubtitle}>Até 10 km de você</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
  },
  container: {
    height: 260,
    justifyContent: "space-between",
  },
  backgroundImage: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  overlay: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 24,
    justifyContent: "space-between",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
  },
  content: {
    gap: 8,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 0.3,
    marginBottom: 28,
    marginLeft: 12,
  },
  subtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: "85%",
  },
  ctaButton: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 999,
  },
  ctaText: {
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "700",
  },
  floatingCard: {
    marginTop: -28,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  infoItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 2,
  },
  infoSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 14,
  },
});