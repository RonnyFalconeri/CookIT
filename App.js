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

const pageHeaderBar = {
  title: 'Neues Rezept',
  headerStyle: {
    backgroundColor: 'white',
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitleStyle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    left: -15
  },
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerBackImage: () => <Image style={{ height: 30, width: 25, left: 10 }} source={require('./assets/backButton.png')} />,
  headerRight: () => <Image style={{ height: 100, width: 100, right: 15, top: 10 }} source={require('./assets/icon.png')} />
};

const homeHeaderBar = {
  title: 'CookIT!',
  headerStyle: {
    backgroundColor: 'white',
    height: 160,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitleStyle: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    left: 60
  },
  headerLeft: () => <Image style={{ height: 120, width: 120, left: 10, top: -10 }} source={require('./assets/icon.png')} />
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="float">
        <Stack.Screen name="Home" component={HomeScreen} options={homeHeaderBar} />
        <Stack.Screen name="AddScreen1" component={AdditionalScreen1} options={pageHeaderBar} />
        <Stack.Screen name="AddScreen2" component={AdditionalScreen2} options={pageHeaderBar} />
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
