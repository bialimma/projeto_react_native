import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Label from '../componentes/Label';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../FirebaseConfig';
import {getAuth} from 'firebase/auth';
import {useAuth} from'../context/auth/useAuth';
import Header from '../componentes/Header'
import Sair from '../componentes/Sair';
import Card from '../componentes/Card.js';
import alface2Img from '../assets/alface2.jpeg';
import gadoImg from '../assets/gado.jpeg';
import uniaoImg from '../assets/uniao.jpeg';
import celebracaoImg from '../assets/celebracao.jpeg';



export default function Inicial({ navigation }) {
  const {user, setUser} = useAuth();

  getAuth().onAuthStateChanged((user) =>{
    if(!user)
      navigation.reset({
        index:0,
        routes:[{name: 'Login'}]
    })
  });

  const handleLogout = async () => {
      auth.signOut()
  };

  return (
    <SafeAreaView style={{backgroundColor: 'lightpink',flex: 1}}>
      <ScrollView>
        <View>
          <Header/>
          <Sair handleLogout={handleLogout}/>
        </View>
        <View style={{  flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 10}}>
          <Card caminho={alface2Img} altura={340} largura={520} descricao='teste'/>
          <Card caminho={gadoImg} altura={340} largura={520} descricao='teste'/>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', borderRadius: 20, padding: 10}}>
          <Card caminho={uniaoImg} altura={340} largura={520} descricao='teste'/>
          <Card caminho={celebracaoImg} altura={340} largura={520} descricao='teste'/>
        </View>

      </ScrollView>
    </SafeAreaView>
  ); 
}
