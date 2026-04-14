import { View, Text, StyleSheet, Image } from "react-native";


export function Card() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        
        
    
            <Image 
            style={styles.image}
            source={require('../../assets/image/logoVersumTech.png')} />
     

    
        <View>
          <Text style={styles.title}>Wine Tasting</Text>
          <Text style={styles.info}>Fri, June 8</Text>
          <Text style={styles.info}>07: PM</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 20,
  },

  card: {
    flexDirection: "row", // 🔥 deixa lado a lado
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12, // 🔥 espaço entre a imagem e os textos

  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  info: {
    fontSize: 12,
    color: "#666",
  },
});