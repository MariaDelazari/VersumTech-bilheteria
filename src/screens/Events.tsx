import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card } from "../components/Card";

export function Events() {

  return (
    <View style={styles.container}>

   
      <Text style={styles.pageTitle}>Meus Ingressos</Text>

      <Card />
      


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 20,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },




});