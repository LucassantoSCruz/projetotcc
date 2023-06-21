import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Moment from 'moment';
import { ENDERECO_API } from "../../config";
import axios from 'axios';


const CaixaAgendaProfissional = (agendamentos) => {
  const profissional = agendamentos.agendamentos.item.tbl_Profissionai
  const servico = agendamentos.agendamentos.item.tbl_Servico
  const cliente = agendamentos.agendamentos.item.tbl_Cliente
  const status = agendamentos.agendamentos.item.tbl_status
  const precoFormatado = servico.preco.replace(".", ",")
  const dataFormatada = Moment(agendamentos.agendamentos.item.data).format('DD/MM/YYYY');
  const horarioFormatado = Moment(agendamentos.agendamentos.item.data).format('HH:mm');
  let botoes = null;

  const alterarStatus = (idStatus) => {
    axios.put(`${ENDERECO_API}/alterarAgendamento/${agendamentos.agendamentos.item.ID}`, {
      FK_Status_Agenda: idStatus
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  switch (status.titulo) {
    case 'Solicitado':
      botoes = (<View style={{ flexDirection: 'row', marginTop: 7, justifyContent: 'center' }}>
        <TouchableOpacity style={styles.botaoConfirmarConcluir} onPress={() => alterarStatus(2)}>
          <Text style={styles.txtbtn}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCancelar} onPress={() => alterarStatus(4)}>
          <Text style={styles.txtbtn}>Cancelar</Text>
        </TouchableOpacity>
      </View>)
      break;
    case 'Confirmado':
      botoes = (<View style={{ flexDirection: 'row', marginTop: 7, justifyContent: 'center' }}>
        <TouchableOpacity style={styles.botaoConfirmarConcluir} onPress={() => alterarStatus(3)}>
          <Text style={styles.txtbtn}>Concluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCancelar} onPress={() => alterarStatus(4)}>
          <Text style={styles.txtbtn}>Cancelar</Text>
        </TouchableOpacity>
      </View>)
      break;
    case 'Concluído':
      botoes = (<View style={styles.statusConcluido}>
        <Text style={styles.txtbtn}>Concluído!</Text>
      </View>)
      break;
    case 'Cancelado':
      botoes = (<View style={styles.statusCancelado}>
        <Text style={styles.txtbtn}>Cancelado!</Text>
      </View>)
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>

      <View>

        <View style={styles.caixa}>

          <View style={styles.imgtxt}>
            {
              servico.imagem ?
                <Image style={styles.imagem} source={{ uri: `${ENDERECO_API}/${servico.imagem.replace('public\\uploads', '/uploads')}` }} />
                :
                <Image style={styles.imagem} source={require('../../assets/images.png')} />
            }

            <View style={styles.texto}>
              <View>
                <Text style={styles.titulo}>{servico.titulo}</Text>
                <Text style={styles.titulo}>Cliente: {cliente.nome}</Text>
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
          {botoes}
        </View>

      </View>
    </View>
  )
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
    borderColor: 'white',
    borderWidth: 1,
    width: 340,
    marginTop: 10,
    marginLeft: 5,
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
  botaoConfirmarConcluir: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fbc8f',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '47%',
    height: 60,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 7
  },
  botaoCancelar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cd5c5c',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '47%',
    height: 60,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 7
  },
  statusCancelado: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cd5c5c',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '97%',
    height: 60,
    marginLeft: 5,
    marginBottom: 7,
    flexDirection: 'row',
    marginTop: 7
  },
  statusConcluido: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fbc8f',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '97%',
    height: 60,
    marginLeft: 5,
    marginBottom: 7,
    flexDirection: 'row',
    marginTop: 7
  },
  txtbtn: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

export default CaixaAgendaProfissional