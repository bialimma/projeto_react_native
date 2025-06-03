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

export default function Doces({navigation}) {
  const [data,setData] = useState([]);
   
  useEffect(()=>{
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try{
      const querySnapshot = await getDocs(collection(db,'Doces'));
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
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#fff',
      background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'
    }}>
      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        margin: 15,
        marginBottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        shadowColor: '#8b5cf6',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10
      }}>
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#8b5cf6',
          textAlign: 'center',
          marginBottom: 10,
          textShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
        }}>
          🍔 Nossos Lanches
        </Text>
        
        <Text style={{
          fontSize: 16,
          color: '#c44569',
          textAlign: 'center',
          fontWeight: '500',
          fontStyle: 'italic'
        }}>
          Sabores irresistíveis que conquistam seu paladar
        </Text>
      </View>

      <View style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        marginHorizontal: 15,
        marginBottom: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flex: 1,
        paddingTop: 10,
        shadowColor: '#c44569',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10
      }}>
        {data.length === 0 ? (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 107, 157, 0.05)',
            margin: 20,
            borderRadius: 20,
            padding: 30,
            borderWidth: 2,
            borderColor: 'rgba(255, 107, 157, 0.2)',
            borderStyle: 'dashed'
          }}>
            <Text style={{
              fontSize: 24,
              color: '#8b5cf6',
              marginBottom: 10
            }}>
              🔄
            </Text>
            <Text style={{
              fontSize: 18,
              color: '#c44569',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              Carregando nossos deliciosos lanches...
            </Text>
            <Text style={{
              fontSize: 14,
              color: '#8b5cf6',
              textAlign: 'center',
              marginTop: 5,
              fontStyle: 'italic'
            }}>
              Aguarde um momento!
            </Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <View style={{
                backgroundColor: '#fff',
                marginHorizontal: 15,
                marginVertical: 8,
                borderRadius: 20,
                padding: 15,
                shadowColor: index % 2 === 0 ? '#ff6b9d' : '#8b5cf6',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.25,
                shadowRadius: 12,
                elevation: 8,
                borderWidth: 2,
                borderColor: index % 2 === 0 ? 'rgba(255, 107, 157, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                transform: [{ scale: 1 }]
              }}>
                <CardItem 
                  titulo={item.titulo} 
                  descricao={item.descricao} 
                  preco={item.preco} 
                  uri={item.imagem}
                />
              </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
              paddingTop: 10
            }}
            ItemSeparatorComponent={() => (
              <View style={{
                height: 1,
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                marginHorizontal: 30,
                marginVertical: 5
              }} />
            )}
            ListFooterComponent={() => (
              <View style={{
                backgroundColor: 'rgba(196, 69, 105, 0.08)',
                marginHorizontal: 15,
                marginTop: 15,
                borderRadius: 15,
                padding: 20,
                borderWidth: 1,
                borderColor: 'rgba(196, 69, 105, 0.2)',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 18,
                  color: '#8b5cf6',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 5
                }}>
                  🎉 Que tal experimentar?
                </Text>
                <Text style={{
                  fontSize: 14,
                  color: '#c44569',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  Todos os nossos lanches são preparados com muito carinho!
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}