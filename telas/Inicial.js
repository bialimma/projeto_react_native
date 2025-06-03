import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Label from '../componentes/Label';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { useAuth } from '../context/auth/useAuth';
import Header from '../componentes/Header'
import Sair from '../componentes/Sair';
import Card from '../componentes/Card.js';
import alface2Img from '../assets/alface2.jpeg';
import gadoImg from '../assets/gado.jpeg';
import uniaoImg from '../assets/uniao.jpeg';
import celebracaoImg from '../assets/celebracao.jpeg';

export default function Inicial({ navigation }) {
  const { user, setUser } = useAuth();

  getAuth().onAuthStateChanged((user) => {
    if (!user)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
  });

  const handleLogout = async () => {
    auth.signOut()
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1,
      background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'
    }}>
      <ScrollView style={{
        backgroundColor: 'transparent'
      }}>
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          margin: 15,
          borderRadius: 20,
          padding: 20,
          shadowColor: '#8b5cf6',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 15,
          elevation: 12
        }}>
          <Header />
          <Sair handleLogout={handleLogout} />
        </View>

        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          margin: 15,
          borderRadius: 25,
          padding: 20,
          shadowColor: '#c44569',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 20,
          elevation: 15
        }}>
          <Text style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#8b5cf6',
            textAlign: 'center',
            marginBottom: 20,
            textShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
          }}>
            🍔 Informações sobre os nossos lanches 🍔
          </Text>

          <View style={{
            justifyContent: 'space-between',
            borderRadius: 20,
            padding: 15,
            backgroundColor: 'rgba(255, 107, 157, 0.1)',
            marginBottom: 20,
            borderWidth: 2,
            borderColor: 'rgba(255, 107, 157, 0.3)'
          }}>
            <View style={{
              backgroundColor: '#fff',
              borderRadius: 15,
              padding: 8,
              shadowColor: '#ff6b9d',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 8,
              borderWidth: 1,
              borderColor: 'rgba(255, 107, 157, 0.2)',
              marginBottom: 20
            }}>
              <Card caminho={alface2Img} altura={340} largura={520} descricao='Alfaces 100% naturais e livres de agrotóxicos, garantindo frescor e saúde no seu lanche!' />
            </View>
            <View style={{
              backgroundColor: '#fff',
              borderRadius: 15,
              padding: 8,
              shadowColor: '#c44569',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 8,
              borderWidth: 1,
              borderColor: 'rgba(196, 69, 105, 0.2)',
            }}>
              <Card caminho={gadoImg} altura={340} largura={520} descricao='Bois criados sem hormônios e antibióticos, para uma carne saudável e saborosa.' />
            </View>
          </View>

          <View style={{
            justifyContent: 'space-between',
            borderRadius: 20,
            padding: 15,
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 2,
            borderColor: 'rgba(139, 92, 246, 0.3)'
          }}>
            <View style={{
              backgroundColor: '#fff',
              borderRadius: 15,
              padding: 8,
              shadowColor: '#8b5cf6',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 8,
              borderWidth: 1,
              borderColor: 'rgba(139, 92, 246, 0.2)',
              marginBottom: 20
            }}>
              <Card caminho={uniaoImg} altura={340} largura={520} descricao='Parte dos lucros é dedicada a apoiar quem mais precisa, com solidariedade e carinho.' />
            </View>
            <View style={{
              backgroundColor: '#fff',
              borderRadius: 15,
              padding: 8,
              shadowColor: '#ff6b9d',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 8,
              borderWidth: 1,
              borderColor: 'rgba(255, 107, 157, 0.2)'
            }}>
              <Card caminho={celebracaoImg} altura={340} largura={520} descricao='Celebrar juntos momentos especiais torna a vida mais feliz e cheia de significado.' />
            </View>
          </View>
        </View>

        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          margin: 15,
          borderRadius: 20,
          padding: 20,
          marginBottom: 30,
          shadowColor: '#c44569',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.2,
          shadowRadius: 15,
          elevation: 10
        }}>
          <Text style={{
            fontSize: 18,
            color: '#8b5cf6',
            textAlign: 'center',
            fontWeight: '600',
            fontStyle: 'italic'
          }}>
            ✨ Aqui comer é celebrar! ✨
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
