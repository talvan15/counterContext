import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCounter } from "../context/contadorContext";

export default function CounterControls() {
  const { increment, decrement, reset, canIncrement, canDecrement } =
    useCounter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.decrement,
          !canIncrement && styles.disabled,
        ]}
        onPress={decrement}
        disabled={!canDecrement}
      >
        <Text style={styles.text}>-1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.reset]} onPress={reset}>
        <Text style={styles.text}>Resetar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.increment,
          !canDecrement && styles.disabled,
        ]}
        onPress={increment}
        disabled={!canIncrement}
      >
        <Text style={styles.text}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  increment: {
    backgroundColor: "#68a3fcff",
  },
  decrement: {
    backgroundColor: "#e74c3c",
  },
  reset: {
    backgroundColor: "#7f8c8d",
  },
  disabled: {
    backgroundColor: "#eee",
  },
});
