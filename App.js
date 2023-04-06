import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo</Text>

      <Text>Meu nome é Guilherme Mestriner e este é meu primeiro APP em React!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  titulo: {
    backgroundColor: "purple",
    padding:  10,
    borderRaddius: 5
  }
});
