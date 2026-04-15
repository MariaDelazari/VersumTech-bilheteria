import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../routes/AppRoutes";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Menu() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.navbar}>
      <Ionicons
        name="home-outline"
        onPress={() => navigation.navigate("Events")}
        size={24}
        color="#888"
      />

      <Ionicons
        name="ticket-outline"
        onPress={() => navigation.navigate("Ticket")}
        size={24}
        color="#888"
      />

      <Ionicons
        name="cart"
        onPress={() => navigation.navigate("Cart")}
        size={24}
        color="#888"
      />

      <Ionicons
        name="person-outline"
        onPress={() => navigation.navigate("Profile")}
        size={24}
        color="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
});