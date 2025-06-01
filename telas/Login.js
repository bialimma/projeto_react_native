import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Label from '../componentes/Label';
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


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
    <SafeAreaView style={styles.container}>
      <View>
        <Label textoExibido="E-mail:" />
        <TextInput placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />
        <Label textoLabel="Senha:" />
        <TextInput placeholder="Digite sua senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />
        <Pressable onPress={handleLogin}><Text>ENTRAR!</Text></Pressable>
        <Pressable onPress={handleCreateAccount}><Text>REGISTRAR!!</Text></Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
