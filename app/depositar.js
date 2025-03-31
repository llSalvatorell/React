import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DepositarScreen() {
  const router = useRouter();

  const opcoes = [
    {
      titulo: 'Depositar por boleto',
      descricao: 'O reconhecimento pode levar até 3 dias úteis',
      icon: require('./img/barras.png'),
    },
    {
      titulo: 'Depositar por TED ou DOC',
      descricao: 'O meio mais rápido de colocar dinheiro na sua NuConta',
      icon: require('./img/transferir.png'),
    },
    {
      titulo: 'Trazer seu salário',
      descricao: 'Receba todo mês e não perca nenhum dia de rendimento',
      icon: require('./img/depositar.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        {opcoes.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  closeButton: { padding: 20 },
  closeText: { fontSize: 24, fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: { width: 24, height: 24, marginRight: 15 },
  textBox: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  description: { fontSize: 13, color: '#666' },
  arrow: { fontSize: 18, color: '#888' },
});
