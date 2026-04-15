import React, { createContext, useContext, useState } from "react";
import type { EventItem } from "../data/events";

type CartContextValue = {
  items: EventItem[];
  addItem: (event: EventItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  hasItem: (id: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<EventItem[]>([]);

  function addItem(event: EventItem) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === event.id);
      if (exists) return prev;
      return [...prev, event];
    });
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  function hasItem(id: string) {
    return items.some((i) => i.id === id);
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, hasItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro do CartProvider");
  return context;
}