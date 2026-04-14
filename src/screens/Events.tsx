import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card } from "../components/Card";

export function Events() {

  return (
    <View style={styles.container}>


      <View style={styles.header}> 

          <Text style={styles.pageTitle}>Eventos</Text>

          <View style={styles.navigationContainer}>
            <Text style={styles.navigation}>
            
              Está por vir
            </Text>

            <Text style={styles.navigation}>
              Publicado
            </Text>

            


          </View>


      </View>

      <Card />
      


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#eee",
 
  },

  header: {

    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 12,
    alignItems: "center",
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },

  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  navigation: {
    fontSize: 16,
    color: "#666",
  },

  hoverNavigation: {
    color: "#620faf",
    fontWeight: "600",
  },




});