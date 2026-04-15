import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          style={styles.image}
          source={{uri: "data:image/jpeg;base64,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"}}
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
          
          <View style={styles.divider}/>

          <View style={styles.localBox}>
            <Text style={styles.label}>Local</Text>
            <Text style={styles.value}>Teatro Principal</Text>
          </View>
 
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
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    marginLeft: 2,
    marginRight: 2,
  },

  image: {
    width: 110,
    height: 120,
    borderRadius: 14,
  },

  content: {
    flex: 1,
    marginLeft: 28,
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
   
    marginBottom: 22,
  },

  localBox: {
    marginBottom: 16,
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

divider: {
  borderBottomWidth: 1,
  borderColor: "#D1D5DB",
  borderStyle: "dashed",
  marginVertical: 5,
},

});