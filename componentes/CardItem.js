import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import Botao from './Botao';
import Label from './Label';
import Estilos from '../estilos/Estilos';

export default function CardItem({titulo, descricao, preco, uri}) {
  return (
    <TouchableHighlight 
      style={{
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#8b5cf6',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 12,
        borderWidth: 2,
        borderColor: 'rgba(255, 107, 157, 0.2)',
        overflow: 'hidden',
        marginVertical: 5
      }} 
      onPress={() => alert("Card")} 
      underlayColor="rgba(255, 107, 157, 0.1)"
      activeOpacity={0.8}
    >
      <View style={{
        padding: 0,
        alignItems: 'center'
      }}>
        {/* Container da Imagem */}
        <View style={{
          width: '100%',
          backgroundColor: 'rgba(139, 92, 246, 0.05)',
          paddingVertical: 15,
          paddingHorizontal: 20,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(255, 107, 157, 0.1)'
        }}>
          <View style={{
            borderRadius: 15,
            overflow: 'hidden',
            shadowColor: '#c44569',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 8,
            borderWidth: 3,
            borderColor: '#fff'
          }}>
            <Image 
              source={{ uri: uri }} 
              style={{ 
                width: 220, 
                height: 220,
                resizeMode: 'cover'
              }}
            />
          </View>
        </View>

        {/* Container das Informações */}
        <View style={{
          width: '100%',
          padding: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}>
          {/* Título */}
          <View style={{
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderRadius: 12,
            padding: 12,
            marginBottom: 12,
            borderWidth: 1,
            borderColor: 'rgba(139, 92, 246, 0.2)',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#8b5cf6',
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(139, 92, 246, 0.2)'
            }}>
              🍔 {titulo}
            </Text>
          </View>

          {/* Descrição */}
          <View style={{
            backgroundColor: 'rgba(255, 107, 157, 0.08)',
            borderRadius: 10,
            padding: 12,
            marginBottom: 12,
            borderWidth: 1,
            borderColor: 'rgba(255, 107, 157, 0.15)'
          }}>
            <Text style={{
              fontSize: 14,
              color: '#c44569',
              textAlign: 'center',
              lineHeight: 20,
              fontWeight: '500'
            }}>
              📋 Descrição: {descricao}
            </Text>
          </View>

          {/* Preço */}
          <View style={{
            backgroundColor: 'rgba(196, 69, 105, 0.1)',
            borderRadius: 15,
            padding: 15,
            borderWidth: 2,
            borderColor: 'rgba(196, 69, 105, 0.3)',
            shadowColor: '#c44569',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 5,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#c44569',
              textAlign: 'center'
            }}>
              💰 Preço: R$ {preco}
            </Text>
          </View>

          {/* Call to Action */}
          <View style={{
            marginTop: 15,
            backgroundColor: 'rgba(255, 107, 157, 0.12)',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: 'rgba(255, 107, 157, 0.25)',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 12,
              color: '#8b5cf6',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              ✨ Toque para mais informações ✨
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}