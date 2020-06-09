import * as React from 'react';
import { StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomFont from './js/components/CustomFont';

import HomeScreen from './js/screens/HomeScreen';
import Recipes from './js/screens/Recipes';
import Recipe from './js/screens/Recipe';
import NewRecipe from './js/screens/NewRecipe';
import EditRecipe from './js/screens/EditRecipe';
import Favorites from './js/screens/Favorites';
import OnlineSearch from './js/screens/OnlineSearch';
import OnlineRecipe from './js/screens/OnlineRecipe';
import RandomRecipe from './js/screens/RandomRecipe';
import Settings from './js/screens/Settings';
import Impressum from './js/screens/Impressum';



const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator initialRouteName="HomeScreen" headerMode="float">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={homeHeaderBar} />
          <Stack.Screen name="Recipes" component={Recipes} options={pageHeaderBar} />
          <Stack.Screen name="Recipe" component={Recipe} options={pageHeaderBar} />
          <Stack.Screen name="NewRecipe" component={NewRecipe} options={pageHeaderBar} />
          <Stack.Screen name="EditRecipe" component={EditRecipe} options={pageHeaderBar} />
          <Stack.Screen name="Favorites" component={Favorites} options={pageHeaderBar} />
          <Stack.Screen name="OnlineSearch" component={OnlineSearch} options={pageHeaderBar} />
          <Stack.Screen name="OnlineRecipe" component={OnlineRecipe} options={pageHeaderBar} />
          <Stack.Screen name="RandomRecipe" component={RandomRecipe} options={pageHeaderBar} />
          <Stack.Screen name="Settings" component={Settings} options={pageHeaderBar} />
          <Stack.Screen name="Impressum" component={Impressum} options={pageHeaderBar} />
        </Stack.Navigator>
      </NavigationContainer>
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
    fontSize: 40,
    left: -35
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
  title: <CustomFont>CookIT!</CustomFont>,
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