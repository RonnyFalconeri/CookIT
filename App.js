import * as React from 'react';
import { StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import HomeScreen from './js/screens/HomeScreen';
import Rezepte from './js/screens/Rezepte';
import Rezept from './js/screens/Rezept';
import Neues_Rezept from './js/screens/Neues_Rezept';
import Edit_Rezept from './js/screens/Edit_Rezept';
import Favoriten from './js/screens/Favoriten';
import Online_Suche from './js/screens/Online_Suche';
import Online_Rezept from './js/screens/Online_Rezept';
import Zufällig from './js/screens/Zufällig';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="HomeScreen" headerMode="float">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={homeHeaderBar} />
          <Stack.Screen name="Rezepte" component={Rezepte} options={pageHeaderBar} />
          <Stack.Screen name="Rezept" component={Rezept} options={pageHeaderBar} />
          <Stack.Screen name="Neues_Rezept" component={Neues_Rezept} options={pageHeaderBar} />
          <Stack.Screen name="Edit_Rezept" component={Edit_Rezept} options={pageHeaderBar} />
          <Stack.Screen name="Favoriten" component={Favoriten} options={pageHeaderBar} />
          <Stack.Screen name="Online_Suche" component={Online_Suche} options={pageHeaderBar} />
          <Stack.Screen name="Online_Rezept" component={Online_Rezept} options={pageHeaderBar} />
          <Stack.Screen name="Zufällig" component={Zufällig} options={pageHeaderBar} />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}



const styles = StyleSheet.create({
  homeHeaderBarStyle: {
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
  homeHeaderBarTitle: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    left: 60
  },
  homeHeaderBarIcon: {
    height: 120,
    width: 120,
    left: 10,
    top: 3
  },
  pageHeaderBarStyle: {
    backgroundColor: 'white',
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  pageHeaderBarTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    left: -15
  },
  pageHeaderBarBackButton: {
    height: 30,
    width: 25,
    left: 10
  },
  pageHeaderBarIcon: {
    height: 100,
    width: 100,
    right: 15,
    top: 10
  }
});

const homeHeaderBar = {
  title: 'CookIT!',
  headerStyle: styles.homeHeaderBarStyle,
  headerTitleStyle: styles.homeHeaderBarTitle,
  headerLeft: () =>
    <Image
      style={styles.homeHeaderBarIcon}
      source={require('./assets/icon.png')}
    />
};

const pageHeaderBar = {
  title: 'Neue Page',
  headerStyle: styles.pageHeaderBarStyle,
  headerTitleStyle: styles.pageHeaderBarTitle,
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerBackImage: () =>
    <Image
      style={styles.pageHeaderBarBackButton}
      source={require('./assets/images/backButton.png')}
    />,
  headerRight: () =>
    <Image
      style={styles.pageHeaderBarIcon}
      source={require('./assets/icon.png')}
    />
};