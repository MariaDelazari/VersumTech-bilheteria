import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          style={styles.image}
          source={require("../../assets/image/logoVersumTech.png")}
        />

        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.title}>Evento VersumTech</Text>


          </View>

  
          <View style={styles.row}>
            <View>
              <Text style={styles.label}>Data</Text>
              <Text style={styles.value}>20/04/2026</Text>
            </View>

            <View>
              <Text style={styles.label}>Hora</Text>
              <Text style={styles.value}>19:00</Text>
            </View>
          </View>

          {/* Local */}
          <View style={styles.localBox}>
            <Text style={styles.label}>Local</Text>
            <Text style={styles.value}>Teatro Principal</Text>
          </View>

          {/* Botão */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver detalhes</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
    padding: 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: 110,
    height: 120,
    borderRadius: 14,
  },

  content: {
    flex: 1,
    marginLeft: 20,
  },

  header: {
    flexDirection: "row",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    flex: 1,
  },



  row: {
    flexDirection: "row",
    gap: "50%",
   
    marginBottom: 12,
  },

  localBox: {
    marginBottom: 12,
  },

  label: {
    fontSize: 11,
    color: "#8A8A8A",
    marginBottom: 2,
    textTransform: "uppercase",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});