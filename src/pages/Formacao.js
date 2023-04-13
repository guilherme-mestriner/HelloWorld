import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Formacao = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Meu Nome é Guilerme </Text>

            <Button
                title="voltar"
                onPress={ () => navigation.navigate('Home') } 
            />
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

  export default Formacao;