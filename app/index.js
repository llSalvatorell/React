import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const router = useRouter();
  
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <ScrollView>
        <View style={styles.cabecalho}>
          <View style={styles.boxIconesCabecalho}>
            <TouchableOpacity onPress={() => router.push('/perfil')}>
              <View style={styles.circulo}>
                <Image style={styles.icone} source={require('./img/user.png')} />
              </View>
            </TouchableOpacity>
            <View style={styles.itensIcones}>
              <Image style={styles.icone} source={require('./img/olho.png')} />
              <Image style={styles.icone} source={require('./img/ajuda.png')} />
              <Image style={styles.icone} source={require('./img/email.png')} />
            </View>
          </View>
          <Text style={styles.textUsuario}>E. Salvatore</Text>
        </View>

        <View style={styles.saldoContainer}>
          <Text style={styles.saldoTitulo}>Conta</Text>
          <Text style={styles.saldoValor}>R$10.000.000</Text>
        </View>

        <View style={styles.atalhosContainer}>
          <TouchableOpacity style={styles.atalho}>
            <View style={styles.iconeContainer}>
              <View style={styles.circuloA}>
                <Image style={styles.icone} source={require('./img/pix.png')} />
              </View>
              <Text>Área Pix</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.atalho} onPress={() => router.push('/pagar')}>
            <View style={styles.iconeContainer}>
              <View style={styles.circuloA}>
                <Image style={styles.icone} source={require('./img/barras.png')} />
              </View>
              <Text>Pagar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.atalho}>
            <View style={styles.iconeContainer}>
              <View style={styles.circuloA}>
                <Image style={styles.icone} source={require('./img/transferir.png')} />
              </View>
              <Text>Transferir</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.atalho} onPress={() => router.push('/depositar')}>
            <View style={styles.iconeContainer}>
              <View style={styles.circuloA}>
                <Image style={styles.icone} source={require('./img/depositar.png')} />
              </View>
              <Text>Depositar</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardCartoes}>
          <Text>Meus Cartões</Text>
        </View>

        <View style={styles.cardCredito}>
          <Text style={styles.creditoTitulo}>Peça Seu Cartão</Text>
          <Text>Cartão sem anuidade, tenha mais controle da sua vida financeira.</Text>
          <TouchableOpacity style={styles.botaoRoxo}>
            <Text style={styles.botaoTexto}>Pedir Cartão</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  cabecalho: {
    backgroundColor: '#8000FF',
    padding: 20,
    paddingTop: 40,
  },
  boxIconesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itensIcones: {
    flexDirection: 'row',
    gap: 15,
  },
  icone: {
    width: 24,
    height: 24,
  },
  circulo: {
    width: 40,
    height: 40,
    backgroundColor: '#9603E8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circuloA: {
    width: 40,
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUsuario: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  saldoContainer: {
    padding: 20,
  },
  saldoTitulo: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',

  },
  saldoValor: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  atalhosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  atalho: {
    // Removido a borda cinza (backgroundColor '#DDD') 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconeContainer: {
    alignItems: 'center',
  },
  cardCartoes: {
    backgroundColor: '#EEE',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  cardCredito: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  creditoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoRoxo: {
    backgroundColor: '#8000FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});
