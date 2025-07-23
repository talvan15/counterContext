import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCounter } from "../context/contadorContext";

export default function CounterDisplay() {
  const { count } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{count}</Text>
      <Text style={styles.label}>Contador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6f2ff",
    padding: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cce0ff",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  value: {
    fontSize: 48,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
});
