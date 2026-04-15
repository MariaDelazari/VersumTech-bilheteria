import { View, Text, StyleSheet, FlatList } from "react-native";
import { Card } from "../components/Card";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  code: string;
  image: string;
};

const events: EventItem[] = [
  {
    id: "1",
    title: "Evento Versum Tech",
    date: "15/04/2026",
    time: "19:00",
    location: "Centro de Convenções",
    code: "VST2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Workshop de React Native",
    date: "18/04/2026",
    time: "14:00",
     location: "Áuditório UniALFA",
     code: "WRN2026",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Meetup de Programação",
    date: "22/04/2026",
    time: "20:00",
    location: "Hub Criativo",
    code: "MP2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Events() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Eventos</Text>
        <Text style={styles.subtitle}>
          Confira os próximos eventos disponíveis
        </Text>
      </View>


      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            date={item.date}
            time={item.time}
            location={item.location}
            code={item.code}
            image={item.image}

            
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  list: {
    paddingBottom: 20,
  },
});