import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CounterProvider } from './context/contadorContext';
import CounterDisplay from './components/counterDisplay';
import CounterControls from './components/counterControls';
import CounterStatus from './components/counterStatus';

export default function App() {
  return (
    <CounterProvider>
      <View style={styles.container}>
        <CounterDisplay />
        <CounterControls />
        <CounterStatus />
      </View>
    </CounterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
