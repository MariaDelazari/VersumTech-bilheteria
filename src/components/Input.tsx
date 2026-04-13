import { TextInput, Text, StyleSheet, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  title: string;
  value: string;
}

export function Input({ title, value, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>

      <TextInput
        style={styles.input}
        value={value}
        placeholderTextColor="#aaa"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  label: {
    color: "#ccc",
    marginBottom: 5,
  },

  input: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "#fff",

    // 🔮 efeito transparente
    backgroundColor: "rgba(255,255,255,0.05)",
  },
});