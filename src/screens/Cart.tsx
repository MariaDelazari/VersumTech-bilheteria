import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../contexts/CartContext";
import { Menu } from "../components/Menu";

export default function Cart({ navigation }: any) {
  const { items, removeItem, clear, addItemCard } = useCart();
  

  const [success, setSuccess] = useState(false);

  let total = 0;
  items.forEach((item) => {
    total += item.price ?? 0;
  });

  function handleCheckout() {
    if (items.length === 0) return;

    items.forEach((item) => addItemCard(item));

    setSuccess(true);
    clear();

    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  }

  return (
    <SafeAreaView style={styles.container}>
 
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </Pressable>

          <Text style={styles.title}>Meu Carrinho</Text>
          <View style={styles.headerRightSpacer} />
        </View>

        <Text style={styles.subtitle}>
          {items.length} {items.length === 1 ? "item" : "itens"}
        </Text>
      </View>

  
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {items.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="cart-outline" size={48} color="#9CA3AF" />
            <Text style={styles.emptyTitle}>Seu carrinho está vazio</Text>
            <Text style={styles.emptySubtitle}>
              Volte para os eventos e garanta seu ingresso.
            </Text>
          </View>
        ) : (
          items.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.eventTitle}>{item.title}</Text>

                <View style={styles.row}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.text}>
                    {item.date} • {item.time}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Ionicons name="location-outline" size={16} color="#666" />
                  <Text style={styles.text}>{item.location}</Text>
                </View>

                <View style={styles.row}>
                  <Ionicons name="ticket-outline" size={16} color="#666" />
                  <Text style={styles.text}>{item.code}</Text>
                </View>

                <Text style={styles.price}>R$ {item.price}</Text>
              </View>

              <Pressable onPress={() => removeItem(item.id)}>
                <Ionicons name="trash-outline" size={20} color="#dc2626" />
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {total}</Text>
        </View>

        <Pressable
          style={[
            styles.button,
            items.length === 0 && styles.buttonDisabled,
          ]}
          onPress={handleCheckout}
          disabled={items.length === 0}
        >
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>

      <Menu />


      {success && (
        <View style={styles.successOverlay}>
          <View style={styles.successBox}>
            <Ionicons
              name="checkmark-circle"
              size={70}
              color="#22c55e"
            />
            <Text style={styles.successText}>
              Compra realizada com sucesso
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },

  header: {
    padding: 20,
  },

  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  headerRightSpacer: {
    width: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 4,
    color: "#666",
  },

  empty: {
    marginTop: 26,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  emptyTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
  },

  emptySubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 14,
    padding: 10,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  eventTitle: {
    fontWeight: "700",
    fontSize: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  text: {
    marginLeft: 6,
    fontSize: 13,
    color: "#555",
  },

  price: {
    marginTop: 6,
    fontWeight: "700",
    color: "#8A2BE2",
  },

  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  totalLabel: {
    fontSize: 16,
    color: "#555",
  },

  totalValue: {
    fontSize: 18,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#8A2BE2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  /* ✅ SUCCESS OVERLAY */
  successOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  successBox: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: 260,
  },

  successText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },
});