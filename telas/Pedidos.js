import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Pedidos({ navigation }) {
  const [endereco, setEndereco] = useState('');
  const [itens, setItens] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const adicionarPedido = async () => {
    if (!endereco || !itens) return;

    try {
      await addDoc(collection(db, 'Pedidos'), {
        endereco,
        itens,
      });
      setEndereco('');
      setItens('');
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao adicionar pedido: ", error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'green', flex: 1 }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white', fontSize: 18, margin: 20 }}>+ Adicionar Pedido</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
            style={{ borderBottomWidth: 1, marginBottom: 15 }}
          />
          <TextInput
            placeholder="Itens"
            value={itens}
            onChangeText={setItens}
            multiline
            style={{ borderBottomWidth: 1, marginBottom: 15 }}
          />
          <Button title="Salvar" onPress={adicionarPedido} />
          <Button
            title="Cancelar"
            color="gray"
            onPress={() => {
              setModalVisible(false);
              setEndereco('');
              setItens('');
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
