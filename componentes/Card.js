import { StyleSheet, View, Pressable, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import Botao from './Botao';
import Label from './Label';
import Estilos from '../estilos/Estilos';

export default function Card(props) {
  return (
     <TouchableHighlight 
       style={{
         backgroundColor: '#fff',
         borderRadius: 20,
         margin: 8,
         shadowColor: '#8b5cf6',
         shadowOffset: { width: 0, height: 8 },
         shadowOpacity: 0.25,
         shadowRadius: 15,
         elevation: 12,
         borderWidth: 2,
         borderColor: 'rgba(255, 107, 157, 0.2)',
         overflow: 'hidden',
         transform: [{ scale: 1 }]
       }} 
       underlayColor="rgba(255, 107, 157, 0.1)"
       activeOpacity={0.8}
       onPressIn={() => {
         // Efeito de pressão visual pode ser adicionado aqui
       }}
     >
      <View style={{
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}>
        <View style={{
          backgroundColor: 'rgba(139, 92, 246, 0.05)',
          borderRadius: 15,
          padding: 10,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: 'rgba(139, 92, 246, 0.1)',
          shadowColor: '#c44569',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5
        }}>
          <Image 
            source={props.caminho} 
            style={{ 
              resizeMode: 'cover',
              width: props.largura, 
              height: props.altura,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: 'rgba(255, 107, 157, 0.2)'
            }} 
          />
        </View>
        
        <View style={{
          backgroundColor: 'rgba(196, 69, 105, 0.08)',
          borderRadius: 12,
          padding: 12,
          width: '100%',
          borderWidth: 1,
          borderColor: 'rgba(196, 69, 105, 0.15)'
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#8b5cf6',
            textAlign: 'center',
            textShadow: '1px 1px 2px rgba(139, 92, 246, 0.1)'
          }}>
            🍴 Descrição: {props.descricao}
          </Text>
        </View>

        <View style={{
          marginTop: 10,
          backgroundColor: 'rgba(255, 107, 157, 0.1)',
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: 'rgba(255, 107, 157, 0.2)'
        }}>
          <Text style={{
            fontSize: 12,
            color: '#c44569',
            fontWeight: '500',
            textAlign: 'center'
          }}>
            ✨ Toque para mais detalhes ✨
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}