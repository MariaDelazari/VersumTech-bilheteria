import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppRoutes from "./src/routes/AppRoutes";
import { CartProvider } from "./src/contexts/CartContext";

export default function App() {
  return (
      <CartProvider>
        <AppRoutes />
      </CartProvider>
  );
}