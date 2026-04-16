import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppRoutes from "./src/routes/AppRoutes";
import { CartProvider } from "./src/contexts/CartContext";

export default function App() {
  return (
    <GestureHandlerRootView >
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </GestureHandlerRootView>
  );
}