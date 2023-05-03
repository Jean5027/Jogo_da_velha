import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [tela,setTela] = useState('menu');
    const [jogadorAtual, setJogadorAtual] = useState('');
    const [tabuleiro, setTabuleiro] = useState([]);
    const [jogadasRestante, setJogadasrestante] = useState(0);
    const [ganhador, setGanhador] = useState('');

    function iniciarJogo(jogador){
      setJogadorAtual(jogador);

      setJogadasrestante(9);
      setTabuleiro([
        ['','',''],
        ['','',''],
        ['','','']
      ]);

      setTela('jogo');

    }

    switch(tela){
      case 'menu':
        return getTelaMenu();
      case 'jogo':
        return getTelaJogo();
      case 'ganhador':
        return getTelaGanhador();
    }

    function getTelaMenu(){
      return (
        <View style={styles.container}>
          <StatusBar style='auto'/>
          <Text style={styles.Title}>Jogo da velha</Text>
          <Text style={styles.subtitulo}>selecione o primeiro jogandor</Text>


          <View style={styles.inlineItens}>
         
          <TouchableOpacity  
          style={styles.boxJogador}
          onPress={() => iniciarJogo('X')}>
          <Text style={styles.JogadorX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.boxJogador}
          onPress={() => iniciarJogo('O')}>
          <Text style={styles.JogadorO}>O</Text>
          </TouchableOpacity>
         
          </View>

        </View>
      );

    }

    function getTelaJogo(){
      return (
        <View style={styles.container}>
          <StatusBar style='auto'/>
          <Text style={styles.subtitulo}>Jogo da velha</Text>


          {
            tabuleiro.map((linha,numeroLinha) => {
              return (
                <View key={numeroLinha} style={styles.inlineItens}>

                  {
                    linha.map((coluna,numeroColuna) => {
                      return (
                        <TouchableOpacity  
                        style={styles.boxJogador}
                        onPress={() => iniciarJogo('X')}>
                        <Text style={styles.JogadorX}>X</Text>
                        </TouchableOpacity>

                      )
                    })
                  }

                </View>
              )
            })

          }
        </View>
      );

    }

    function getTelaGanhador(){
      return (
        <View style={styles.container}>
          <StatusBar style='auto'/>
          <Text>Ganhador</Text>
        </View>
      );

    }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333'
  },
  subtitulo: {
    fontSize: 20,
    color: '#555',
    marginTop: 20,
  },
  boxJogador:{
    width: 80,
    height: 80,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  JogadorO: {
    fontSize: 40,
    color: '#da3f3f',
    
    
  },
  JogadorX: {
    fontSize: 40,
    color: '#553fda',
  
  },
  inlineItens: {
    flexDirection: 'row',

  }
});
