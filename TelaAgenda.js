import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View>

        <View style={styles.caixa}>

        <View style={styles.imgtxt}>
        <Image style={styles.imagem} source={require('./assets/images.png')} />
        <View style={styles.texto}>
          <View>
          <Text style={styles.titulo}>Corte Simples</Text>
          <Text style={styles.titulo}>Unique Beauty</Text>
          </View>

          <View style={styles.info}>
          <Text>Quantidade: 1</Text>
          <Text>Valor: R$40,00</Text>
          <Text>Data: 25/04</Text>
          <Text>Horário: 15h</Text>
          <Text>Local: Cabelereira Leila</Text>
          </View>
        </View>
        
        </View>

        <View style={{ flexDirection: 'row', marginTop: 7}}>
        <TouchableOpacity style={styles.botao}>
          <Text>Botão</Text>
        </TouchableOpacity>
              
        <TouchableOpacity style={styles.botao}>
          <Text>Botão</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao}>
          <Text>Botão</Text>
        </TouchableOpacity>
        </View>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50
  },
  caixa: {
    width: 350,
    height: 250,
    backgroundColor: '#DCBADB',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  imgtxt: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 340,
    height: 163,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#F4E8F2'
  },
  imagem: { 
    width: 165,
    height: 160,
    borderRadius: 10
  },
  texto: {
    width: 165,
    height: 160,
    marginLeft: 5,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 15
  },
  info: {
    marginTop: 15
  },
  botao: {
    alignItems:'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: '#F4E8F2',
    borderWidth: 1,
    borderRadius: 10,
    width: 110,
    height: 60,
    marginLeft: 5,
  }

});
