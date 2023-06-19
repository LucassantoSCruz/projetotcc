import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Moment from 'moment';

const CaixaAgendaCliente = ({ agendamentos }) => {
  const { item } = agendamentos;
  const { tbl_Profissionai: profissional, tbl_Servico: servico, tbl_Cliente: cliente, tbl_status: status } = item;
  const precoFormatado = servico.preco.replace(".", ",")
  const dataFormatada = Moment(item.data).format('DD/MM/YYYY');
  const horarioFormatado = Moment(item.data).format('HH:mm');

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.caixa}>
          <View style={styles.imgtxt}>
            <Image style={styles.imagem} source={require('../../assets/images.png')} />
            <View style={styles.texto}>
              <View>
                <Text style={styles.titulo}>{servico.titulo}</Text>
                <Text style={styles.titulo}>{profissional.nomeFantasia}</Text>
              </View>
              <View style={styles.info}>
                <Text>Status: {status.titulo}</Text>
                <Text>Valor: R${precoFormatado}</Text>
                <Text>Data: {dataFormatada}</Text>
                <Text>Horário: {horarioFormatado}</Text>
                <Text>Local: Cabelereira Leila</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    width: '100%'
  },
  caixa: {
    width: 350,
    backgroundColor: '#DCBADB',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  imgtxt: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 340,
    marginTop: 5,
    marginLeft: 3,
    marginBottom: 5,
    backgroundColor: '#F4E8F2',
    alignItems: 'center',
  },
  imagem: {
    width: 165,
    height: 160,
    borderRadius: 10
  },
  texto: {
    width: 165,
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E8F2',
    borderRadius: 10,
    width: '47%',
    height: 60,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 7
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4E8F2',
    borderRadius: 10,
    width: '97%',
    height: 60,
    marginLeft: 5,
    marginBottom: 7,
    flexDirection: 'row', 
    marginTop: 7
  }
});

export default CaixaAgendaCliente