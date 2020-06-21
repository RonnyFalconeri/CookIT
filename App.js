import * as React from 'react';
import * as SQLite from 'expo-sqlite';
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


const database = SQLite.openDatabase('recipes.db');

const Stack = createStackNavigator();

const defaultRecipes = [
  {
    id: 'default_1',
    image: null,//require('assets/images/trofie.jpg'),
    title: 'Trofie alla Bolognese',
    duration: '90',
    nationality: 'ITA',
    ingredients: [
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '1', ingredient: 'Möhre' },
      { amount: '2', ingredient: 'Sellerie' },
      { amount: '200g', ingredient: 'Erbsen' },
      { amount: '500g', ingredient: 'Rindhackfleisch' },
      { amount: '2 Flaschen', ingredient: 'Tomatensoße' },
      { amount: '5 Blätter', ingredient: 'Basilikum' },
      { amount: '1 Prise', ingredient: 'Muskat-Pfeffer' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '1 Prise', ingredient: 'Zucker' }
    ],
    preparation: 'Olivenöl in den Topf. Zwiebel klein schneiden und auf Topf dünnsten. Sellerie und Möhre klein schneiden und hinzufügen. Rindhackfleisch hinzufügen und anbraten, dabei Muskat-Pfeffer und Salz nach belieben mitmischen. Wenn alles gebraten ist, Tomatesoße hinzufügen und Zucker. Alles ein Stunde kochen lassen. Danach Wasser im extra Topf kochen, Pasta hinzufügen und salzen. 10 min kochen lassen und dann mit Basilikum auf den Nudel servieren.',
    favorite: true,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_2',
    image: null,//require('assets/images/guacamole.jpg'),
    title: 'Guacamole',
    duration: '10',
    nationality: 'MEX',
    ingredients: [
      { amount: '2', ingredient: 'Avocado' },
      { amount: '1', ingredient: 'Tomate' },
      { amount: '1/2', ingredient: 'Zitrone' },
      { amount: '1', ingredient: 'Knoblauchzehe' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '3', ingredient: 'Chillischoten' },
      { amount: '1', ingredient: 'Salz' },
      { amount: '1', ingredient: 'Pfeffer' }
    ],
    preparation: 'Tomaten, Knoblauch, Zwiebel, Chillischoten klein schneiden. Avocados mit einem Löffel aushüllen und zu den anderen Zutaten hinzufügen und mit Messer/Löffel/Gabel zerkleinern, dann Zitrone auspressen. Zuletzt mit einem Mixer alles zerkleinern und dabei Salz und Pfeffer hinzufügen. ',
    favorite: true,
    author: 'Ronny Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_3',
    image: null,//require('assets/images/dorate.jpg'),
    title: 'Gebackende Dorate',
    duration: '50',
    nationality: 'ITA',
    ingredients: [
      { amount: '4', ingredient: 'Dorade-Fische' },
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '4', ingredient: 'Knoblauchzehen' },
      { amount: '1 Prise', ingredient: 'Oregano' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '1 Prise', ingredient: 'Pfeffer' },
      { amount: '1', ingredient: 'Zitrone' }
    ],
    preparation: 'Fisch putzen und in Backform legen. Olivenöl mit Oregano, Salz, Knoblauch (kleingeschnitten) und Pfeffer in eine kleine Schüssel mischen. Mischung in und auf den Fisch füllen und in den Backofen bei 200 Grad Celsius schieben und 45 Min kochen lassen. Danach mit Zitrone servieren.',
    favorite: false,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_4',
    image: null,//require('assets/images/zuchinisahne.jpg'),
    title: 'Penne mit Zuchini-Sahne-Soße',
    duration: '20',
    nationality: 'ITA',
    ingredients: [
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '1/2', ingredient: 'Zwiebel' },
      { amount: '1', ingredient: 'Knoblauchzehe(n)' },
      { amount: '1', ingredient: 'Zuchini' },
      { amount: '400ml', ingredient: 'Sahne' },
      { amount: '6', ingredient: 'Cherrytomaten' },
      { amount: '2', ingredient: 'Brühewürfel' },
      { amount: '500g', ingredient: 'Penne' },
      { amount: '1 Prise', ingredient: 'Parmesan' }
    ],
    preparation: 'Olivenöl, Zwiebeln und Knoblauch kleingeschnitten mischen und dünsten lassen. Cherrytomaten und Zuchini klein schneiden und hinzumischen. Sahne hinzurühren und 20 Min kochen lassen. Danach ein Topf mit Wasser und Brühewürfel vorbereiten. Die Penne hinzufügen, sobald das Wasser kocht und 10 Min kochen lassen. Nudeln abgießen und in die Pfanne zur Sahne schmeißen und umrühren. Schließlich mit Parmesan servieren.',
    favorite: false,
    author: 'Claudia Falconeri',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_5',
    image: null,//require('assets/images/sarma.jpg'),
    title: 'Sarma',
    duration: '110',
    nationality: 'TUR',
    ingredients: [
      { amount: '20', ingredient: 'Gekochte Weinblätter' },
      { amount: '5', ingredient: 'Getrocknete Paprika' },
      { amount: '5', ingredient: 'Getrocknete Aubergine' },
      { amount: '5', ingredient: 'Getrocknete Gurke' },
      { amount: '5', ingredient: 'Getrocknete (weiße) Zuchini' },
      { amount: '1,5 Tassen', ingredient: 'Reis' },
      { amount: '1 Bund', ingredient: 'Petersilie' },
      { amount: '5', ingredient: 'Knoblauchzehe(n)' },
      { amount: '5', ingredient: 'Zwiebeln' },
      { amount: '1', ingredient: 'Spitzpaprika' },
      { amount: '2TL', ingredient: 'Paprikamark' },
      { amount: '1EL', ingredient: 'Olivenöl' },
      { amount: '2TL', ingredient: 'Rapsöl' },
      { amount: '1 Prise', ingredient: 'Salz' },
      { amount: '2TL', ingredient: 'Paprikapulver' },
      { amount: '1 Prise', ingredient: 'Pfeffer' },
      { amount: '1 Prise', ingredient: 'Sumak-Eski' }
    ],
    preparation: 'Für die Füllung folgende Zutaten kleinhacken, zusammenmischen und kochen: Reis, Petersilie, Knoblauch, Zwiebeln, Spitzpaprika, Paprikamark, Olivenöl, Rapsöl, Salz, Paprikapulver, Pfeffer, Sumak-Eski (oder Zitronensalz). Die Weinblätter damit füllen. Danach Olivenöl in den Topf geben und alle gefüllten Weinblätter darin stapeln. Den Topf mit Wasser füllen bis alles bedeckt ist. Dann etwas Salz und „Sumak eskisi“ darauf geben.',
    favorite: true,
    author: 'Silan Yüzükan',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_6',
    image: null,//require('assets/images/jägersoße.jpg'),
    title: 'Jägermeister-Soße für Burger',
    duration: '30',
    nationality: 'GER',
    ingredients: [
      { amount: '12cl', ingredient: 'Jägermeister' },
      { amount: '400ml', ingredient: 'Ketchup' },
      { amount: '250ml', ingredient: 'Cola' },
      { amount: '100ml', ingredient: 'Worchestersoße' },
      { amount: '25ml', ingredient: 'Ahornsirup' },
      { amount: '1/2TL', ingredient: 'Salz' }
    ],
    preparation: 'Alle Zutaten in der richtigen Menge in einem Topf vermischen und bei mittlerer Hitze verrühren. Die Soße kann man nach Geschmack dickflüssiger machen, indem man weniger Cola und Worchestersoße nimmt.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_7',
    image: null,//require('/assets/images/burger.jpg'),
    title: 'Klassische Burger',
    duration: '60',
    nationality: 'USA',
    ingredients: [
      { amount: '800g', ingredient: 'Bio-Rinderhackfleisch' },
      { amount: '4', ingredient: 'XXL Burger-Buns' },
      { amount: '4', ingredient: 'Schmelzkäse' },
      { amount: '1', ingredient: 'Tomate' },
      { amount: '1', ingredient: 'Zwiebel' },
      { amount: '4 Blätter', ingredient: 'Eisbergsalat' },
      { amount: '8', ingredient: 'Zahnstocher' }
    ],
    preparation: 'Alle Zutaten in der vorgegebenen Menge auf Tellern vorbereiten. Das Hackfleisch wird zuerst geknetet und dann in gleichmäßigen Portionen auf eine Pfanne gelegt. Die Bratzeit variert nach gewünschtem Zustand des Pattie (medium oder durch) und nach Hitze der Pfanne. Während des Braten etwas Salz auf den Patties verteilen und die Burger-Buns mit Schmelzkäse in den Ofen schieben. Sobald die Patties und die Buns fertig sind, diese mit den anderen Zutaten zu einem Burger zusanmmenlegen und mit ein, zwei Zahnstochern fixieren. Falls Soße zur Verfügung steht, kann diese als Abschluss noch über den Patties verteilt werden.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
  {
    id: 'default_8',
    image: null,//require('assets/images/pilzsalat.jpg'),
    title: 'Pilzsalat',
    duration: '30',
    nationality: 'GER',
    ingredients: [
      { amount: '2', ingredient: 'Romanosalate' },
      { amount: '500g', ingredient: 'Verschiedene Pilzsorten (Steinpilz, Pfifferlingen, Austernpilze)' },
      { amount: '4', ingredient: 'Büffelmozarella' },
      { amount: '16', ingredient: 'Wildtomaten' },
      { amount: '1', ingredient: 'Avocado' },
      { amount: 'nach Geschmack', ingredient: 'Salatsoße' },
      { amount: '3 Zehen', ingredient: 'Knoblauch' },
      { amount: '1 Schuss', ingredient: 'Balsamico Creme' }
    ],
    preparation: 'Alle Zutaten in der vorgegebenen Menge auf Tellern vorbereiten. Das Hackfleisch wird zuerst geknetet und dann in gleichmäßigen Portionen auf eine Pfanne gelegt. Die Bratzeit variert nach gewünschtem Zustand des Pattie (medium oder durch) und nach Hitze der Pfanne. Während des Braten etwas Salz auf den Patties verteilen und die Burger-Buns mit Schmelzkäse in den Ofen schieben. Sobald die Patties und die Buns fertig sind, diese mit den anderen Zutaten zu einem Burger zusanmmenlegen und mit ein, zwei Zahnstochern fixieren. Falls Soße zur Verfügung steht, kann diese als Abschluss noch über den Patties verteilt werden.',
    favorite: false,
    author: 'Wenjie Wang',
    createdAt: '00:00 Uhr, 25. Mai 2020'
  },
];

export default class App extends React.Component {

  componentDidMount() {

    //this._resetDB();

    this._initDB();

    this._initDefaultRecipes();

  }

  _saveInDB(recipe) {
    database.transaction(
      transaction => transaction.executeSql(
        'INSERT INTO recipe (id, image, title, duration, nationality, ingredients, preparation, author, favorite, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        [recipe.id, recipe.image, recipe.title, recipe.duration, recipe.nationality, JSON.stringify(recipe.ingredients), recipe.preparation, recipe.author, recipe.favorite, recipe.createdAt]
      )
    );
  }

  _resetDB() {
    // delete DB
    database.transaction(
      transaction => transaction.executeSql('DROP TABLE recipe')
    );
  }

  _initDB() {
    // create DB table
    database.transaction(
      transaction => transaction.executeSql(
        'CREATE TABLE IF NOT EXISTS recipe(\
          id text primary key not null,\
          image text,\
          title text not null,\
          duration int not null,\
          nationality text not null,\
          ingredients text not null,\
          preparation text not null,\
          author text not null,\
          favorite bit,\
          createdAt text not null\
          );'
      )
    );
  }

  _initDefaultRecipes() {
    let recipes = defaultRecipes;
    recipes.forEach(recipe => {
      database.transaction(
        transaction => transaction.executeSql(
          'INSERT INTO recipe (id, image, title, duration, nationality, ingredients, preparation, author, favorite, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
          [recipe.id, null, recipe.title, recipe.duration, recipe.nationality, recipe.ingredients, recipe.preparation, recipe.author, recipe.favorite, recipe.createdAt]
        )
      );
    });

  }

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