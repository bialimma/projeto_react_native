import { StyleSheet, Text, View, TextInput, Pressable, Button, FlatList, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import Botao from '../componentes/Botao';
import Input from '../componentes/Input';
import Label from '../componentes/Label';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import {collection, getDocs, setDoc, doc} from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import CardItem from '../componentes/CardItem.js';


export default function Bebidas({navigation}) {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try{
      const querySnapshot = await getDocs(collection(db,'Bebidas'));
      const lanches = [];
      querySnapshot.forEach((doc) => {
        lanches.push({
          id: doc.id,
          titulo: doc.data().titulo,
          descricao: doc.data().descricao,
          preco: doc.data().preco,
          imagem: doc.data().imagem
        });
      });
      setData(lanches);
      console.log(lanches[0])
    } catch (error){
      console.error("Erro ao carregar dados:",error)
    }
  };

  return (
        <SafeAreaView style={{ flex:1}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
             <CardItem titulo={item.titulo} descricao={item.descricao} preco={item.preco} uri={item.imagem}/>
            )}
          />
        </SafeAreaView>
  );
}
