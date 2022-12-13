import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please enter your name:
      </Text>

      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)}
      />

      <Text style={styles.text}>
        Your name is: {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,

  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',

  }
});
