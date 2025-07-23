import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useCounter } from '../context/contadorContext';

export default function CounterStatus() {
  const { canIncrement, canDecrement, count } = useCounter();

  const statusMessage = count === 100
    ? 'Status: Valor máximo atingido!'
    : count === 0
    ? 'Status: Valor mínimo atingido!'
    : 'Status: Dentro do intervalo.';

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{statusMessage}</Text>
      <View style={styles.row}>
        <Text style={styles.info}>
          Incrementar: {canIncrement ? '✅ Permitido' : '❌ Bloqueado'}
        </Text>
        <Text style={styles.info}>
          Decrementar: {canDecrement ? '✅ Permitido' : '❌ Bloqueado'}
        </Text>
      </View>

      {/* Barra de progresso */}
      <Text style={styles.progressText}>Progresso: {count}/100</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${(count / 100) * 100}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#f1c40f',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fffef5',
    width: '100%',
  },
  status: {
    fontWeight: 'bold',
    color: '#e67e22',
    marginBottom: 8,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 4,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#f39c12',
    borderRadius: 5,
  },
});
