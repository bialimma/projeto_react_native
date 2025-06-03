import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Label from '../componentes/Label';
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('BottomTabsTela1');
      } 
    });

    return () => checkLogin();
  }, []);

  const handleLogin = async () => {
    if (!email.includes('@') || senha.length < 8) {
      alert('Login inválido');
    } else {
      try {
        const user = await signInWithEmailAndPassword(auth, email, senha);
        if (user) {
          navigation.navigate('BottomTabsTela1');
        }
      } catch (error) {
        console.log(error);
        alert("Errou!" + error.message);
      }
    }
  };

  const handleCreateAccount = async () => {
    if (!email.includes('@') || senha.length < 8) {
      alert('Dados inválidos');
    } else {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, senha);
        if (user) {
          alert("Cadastro realizado com sucesso!");
        }
      } catch (error) {
        console.log(error);
        alert('Erro ao criar cadastro, tente novamente');
      }
    }
  };

  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
      flex: 1,
      background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #8b5cf6 100%)'
    }}>
      <ScrollView 
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: 20
        }}
        style={{
          backgroundColor: 'transparent'
        }}
      >
        {/* Header */}
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 25,
          padding: 30,
          marginBottom: 30,
          shadowColor: '#8b5cf6',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
          elevation: 15,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#8b5cf6',
            textAlign: 'center',
            marginBottom: 10,
            textShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)'
          }}>
            🍔 Bem-vindo! 🍔
          </Text>
          <Text style={{
            fontSize: 16,
            color: '#c44569',
            textAlign: 'center',
            fontWeight: '600',
            fontStyle: 'italic'
          }}>
            ✨ Aqui comer é celebrar! ✨
          </Text>
        </View>

        {/* Formulário de login */}
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 25,
          padding: 30,
          shadowColor: '#c44569',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.25,
          shadowRadius: 15,
          elevation: 12
        }}>
          
          {/* Input e-mail */}
          <View style={{
            marginBottom: 20
          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#8b5cf6',
              marginBottom: 8,
              marginLeft: 5
            }}>
              📧 E-mail:
            </Text>
            <TextInput 
              placeholder="Digite seu e-mail" 
              value={email} 
              onChangeText={setEmail}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 15,
                padding: 15,
                fontSize: 16,
                borderWidth: 2,
                borderColor: 'rgba(255, 107, 157, 0.3)',
                shadowColor: '#ff6b9d',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3
              }}
              placeholderTextColor="rgba(139, 92, 246, 0.6)"
            />
          </View>

          {/* Input de senha */}
          <View style={{
            marginBottom: 30
          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#8b5cf6',
              marginBottom: 8,
              marginLeft: 5
            }}>
              🔒 Senha:
            </Text>
            <TextInput 
              placeholder="Digite sua senha" 
              secureTextEntry={true} 
              value={senha} 
              onChangeText={setSenha}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 15,
                padding: 15,
                fontSize: 16,
                borderWidth: 2,
                borderColor: 'rgba(196, 69, 105, 0.3)',
                shadowColor: '#c44569',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3
              }}
              placeholderTextColor="rgba(139, 92, 246, 0.6)"
            />
          </View>

          {/* Botão de login */}
          <Pressable 
            onPress={handleLogin}
            style={{
              backgroundColor: '#8b5cf6',
              borderRadius: 20,
              padding: 18,
              marginBottom: 15,
              shadowColor: '#8b5cf6',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 15,
              elevation: 10,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <Text style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
               ENTRAR
            </Text>
          </Pressable>

          {/* Botão de cadastro */}
          <Pressable 
            onPress={handleCreateAccount}
            style={{
              backgroundColor: '#ff6b9d',
              borderRadius: 20,
              padding: 18,
              shadowColor: '#ff6b9d',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 15,
              elevation: 10,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <Text style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              CRIAR CONTA
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 20,
          padding: 20,
          marginTop: 30,
          shadowColor: '#c44569',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 8
        }}>
          <Text style={{
            fontSize: 14,
            color: '#8b5cf6',
            textAlign: 'center',
            fontWeight: '500',
            fontStyle: 'italic'
          }}>
            🍟 Desenvolvido por: Bruno e Bianca 🍟
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}