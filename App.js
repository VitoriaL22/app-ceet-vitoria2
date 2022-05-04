import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Principal from './telas/Principal';
import Cursos from './telas/Cursos';
import Historia from './telas/Historia';
import Formulario from './telas/Formulario';
import Portal from './telas/Portal';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button>EEEEEEEEEE</Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Cursos" component={Cursos} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Portal" component={Portal} />
      </Stack.Navigator>
    </NavigationContainer>
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



export default Rotas;


