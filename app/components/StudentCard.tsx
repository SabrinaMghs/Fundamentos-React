import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StudentCardProps {
  nome: string;
  curso: string;
  mensagem: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ nome, curso, mensagem }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.curso}>{curso}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  curso: {
    fontSize: 18,
    marginTop: 10,
  },
  mensagem: {
    fontSize: 16,
    marginTop: 10,
  },
});