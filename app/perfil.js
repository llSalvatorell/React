import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function PerfilScreen() {
  const router = useRouter();

  const opcoes = [
    { texto: 'Me ajuda', icon: require('./img/help.png') },
    { texto: 'Meus Dados', icon: require('./img/user2.png') },
    { texto: 'Informe de rendimentos', icon: require('./img/document.png') },
    { texto: 'Configurar app', icon: require('./img/settings.png') },
    { texto: 'Segurança', icon: require('./img/security.png') },
    { texto: 'Configurar chaves Pix', icon: require('./img/pix.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBox}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>

          <View style={styles.userBox}>
            <View style={styles.avatar}>
              <Image style={{ width: 30, height: 30 }} source={require('./img/user.png')} />
            </View>
            <Text style={styles.nome}>E. Salvatore</Text>
            <Text style={styles.conta}>Agência 0001 • Conta 1111111-1</Text>
            <Text style={styles.conta}>Banco 0001 • Nu Pagamentos S.A.</Text>
          </View>
        </View>

        <View style={styles.opcoesBox}>
          {opcoes.map((item, index) => (
            <TouchableOpacity key={index} style={styles.opcao}>
              <View style={styles.iconLabel}>
                <Image source={item.icon} style={styles.icone} />
                <Text style={styles.texto}>{item.texto}</Text>
              </View>
              <Text style={styles.seta}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBox: { backgroundColor: '#F1F1F6', padding: 20 },
  close: { fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-end' },
  userBox: { marginTop: 10 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8000FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nome: { fontWeight: 'bold', fontSize: 16 },
  conta: { color: '#555', fontSize: 13 },
  opcoesBox: { marginTop: 10 },
  opcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icone: { width: 20, height: 20 },
  texto: { fontSize: 15 },
  seta: { fontSize: 18, color: '#888' },
});
