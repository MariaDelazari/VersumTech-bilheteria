import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "../components/Card";
import { events } from "../data/events";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export  function Events({
  navigation,
}: any) {
  return ( 
    <FlatList 
      data={events}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={ 
        <View style={styles.wrapper}>
          <StatusBar barStyle="light-content" /> 

          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
            }}
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
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Ionicons name="menu" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.iconButton}
                  activeOpacity={0.8}
                >
                  <Ionicons name="search" size={22} color="#fff" />
                </TouchableOpacity>
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>Eventos</Text>
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
      }
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <Card
            title={item.title}
            date={item.date}
            time={item.time}
            location={item.location}
            code={item.code}
            image={item.image}
            onPress={() => navigation.navigate("Event", { event: item })}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 24,
    backgroundColor: "#F3F4F6",
  },
  wrapper: {
    backgroundColor: "#F3F4F6",
    marginBottom: 20,
  },
  container: {
    height: 240,
    justifyContent: "space-between",
  },
  backgroundImage: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  overlay: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    paddingBottom: 24,
    justifyContent: "space-between",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
    letterSpacing: 0.4,
    marginBottom: 28,
    marginLeft: 5,
  },
  floatingCard: {
    marginTop: -28,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    paddingLeft: 38,
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
  cardContainer: {
    paddingHorizontal: 15,
    marginBottom: 4,
  },
});