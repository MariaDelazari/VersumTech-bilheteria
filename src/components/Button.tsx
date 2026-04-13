import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }:ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.75} {...rest}>
      
      <LinearGradient
        colors={["#C084FC", "#620faf", "#8A2BE2"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",


    backgroundColor: "rgba(255,255,255,0.2)",

    shadowColor: "#C084FC",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 1,
  },
});