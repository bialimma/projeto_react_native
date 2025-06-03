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
import alfaceImg from '../assets/alface.png';
import gadoImg from '../assets/gado.png';



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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header/>
        <View style={{flexDirection:'row'}}>
          <Card caminho={alfaceImg} altura={420} largura={580} descricao='teste'/>
          <Card caminho={gadoImg} altura={340} largura={520} descricao='teste'/>
        </View>
        <Sair handleLogout={handleLogout}/>
        <Text>{user?.email}</Text>
        <Label textoLabel="AAAAAAAAAAAAAAAAA" />
      </ScrollView>
    </SafeAreaView>
  ); 
}
