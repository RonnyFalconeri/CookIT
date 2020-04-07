import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to AdditionalScreen1"
        onPress={() => navigation.navigate('AddScreen1')}
      />
    </View>
  );
}

function AdditionalScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Additional Screen 1</Text>
      <Button
        title="Go to AdditionalScreen2"
        onPress={() => navigation.navigate('AddScreen2')}
      />
    </View>
  );
}

function AdditionalScreen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Additional Screen 2</Text>
    </View>
  );
}

const headerBarOptions = {
  title: 'Custom Title',
  headerStyle: { backgroundColor: 'white', height: 120 },
  headerTitleStyle: { color: 'black', fontWeight: 'bold', left: 50 },
  headerTitleAlign: 'left',
  headerRight: () => <Image style={{ height: 110, width: 110, right: 30, top: 30 }} source={require('./assets/icon.png')} />
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={headerBarOptions} headerMode="float">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddScreen1" component={AdditionalScreen1} />
        <Stack.Screen name="AddScreen2" component={AdditionalScreen2} />
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
