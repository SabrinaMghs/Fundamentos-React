import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StudentCard from './components/StudentCard';

export default function App() {

  // Estado da mensagem
  const [mensagem, setMensagem] = useState("Ainda não cliquei no botão");

  // Estado para controlar se clicou
  const [clicou, setClicou] = useState(false);

  // Função do botão
  const handlePress = () => {
    setMensagem("Agora eu cliquei no botão!");
    setClicou(true);
  };

  return (
    <View style={styles.container}>

      {/* App envia props */}
      <StudentCard
        nome="Sabrina"
        curso="Fundamentos do React Native"
        mensagem={mensagem}
      />

      {/* 5) Botão interativo */}
      <Button
        title="Clique aqui"
        onPress={handlePress}
      />

      {/* 6) Renderização condicional */}
      {clicou && (
        <Text style={styles.novoElemento}>
          🎉 Parabéns! Você clicou no botão!
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0e8f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  novoElemento: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});