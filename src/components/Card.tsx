import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "../components/Button";

type CardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  code: string;
  image: string;
  tem?: boolean;
  onPress?: () => void;
};

export function Card({
  title,
  date,
  time,
  location,
  code,
  image,
  tem,
  onPress,
  
}: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <View style={styles.mainContent}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />

          <View style={styles.info}>
            <Text style={styles.tag}>EVENTO</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Ingresso digital</Text>

            <View style={styles.detailsRow}>
              <View style={styles.detailsBlock}>
                <Text style={styles.label}>Data</Text>
                <Text style={styles.value}>{date}</Text>
              </View>

              <View style={styles.detailsBlock}>
                <Text style={styles.label}>Hora</Text>
                <Text style={styles.value}>{time}</Text>
              </View>
            </View>

            <View style={styles.locationBox}>
              <Text style={styles.label}>Local</Text>
              <Text style={styles.value}>{location}</Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorArea}>
          <View style={styles.cutLeft} />
          <View style={styles.dashedLine} />
          <View style={styles.cutRight} />
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={styles.codeLabel}>Código do ingresso</Text>
            <Text style={styles.codeValue}>{code}</Text>
          </View>

          {tem && (
          <Button
            title="Acessar Evento"
            onPress={onPress}
            style={styles.button}
            textStyle={{ fontSize: 12 }}
          />
          ) 
            
          
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    padding: 3,
  },

  ticket: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,     
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  mainContent: {
    flexDirection: "row",
    height: 140,
  },

  image: {
    width: 130,
    height: "100%",
  },

  info: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8,
  },

  tag: {
    fontSize: 10,
    fontWeight: "700",
    color: "#6B7280",
    letterSpacing: 1.2,
    marginBottom: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f1523",
    marginBottom: 4,
    marginTop: 2,
  },

  subtitle: {
    fontSize: 11,
    color: "#6B7280",
    marginBottom: 5,
  },

  detailsRow: {
    flexDirection: "row",
    marginBottom: 2,
    gap: 20,
  },

  detailsBlock: {
    flex: 1,
  },

  locationBox: {
    marginTop: 4,
  },

  label: {
    fontSize: 9,
    fontWeight: "700",
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 2,
  },

  value: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 2,
  },

  separatorArea: {
    position: "relative",
    justifyContent: "center",
  },

  dashedLine: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D1D5DB",
    marginHorizontal: 10,
    margin: 1,
  },

  cutLeft: {
    position: "absolute",
    left: -10,
    top: -9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#F3F4F6",
    zIndex: 2,
  },

  cutRight: {
    position: "absolute",
    right: -10,
    top: -9,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#F3F4F6",
    zIndex: 2,
  },

  footer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  codeLabel: {
    fontSize: 8,
    fontWeight: "700",
    color: "#9CA3AF",
    textTransform: "uppercase",
    marginBottom: 2,
  },

  codeValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f1523",
    letterSpacing: 0.6,
  },

  button: {
    paddingHorizontal: 17,
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});