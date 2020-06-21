import * as React from 'react';
import * as Haptics from 'expo-haptics';
import * as SQLite from 'expo-sqlite';
import { ScrollView, StyleSheet, View } from 'react-native';

import FavoritesListItem from '../components/FavoritesListItem';
import CustomFont from '../components/CustomFont';


const database = SQLite.openDatabase('recipes.db');

export default class Favorites extends React.Component {
    state = {
        recipes: []
    };


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Favoriten</CustomFont> });

        this._retrieveRecipes();
    }

    _retrieveRecipes() {
        database.transaction(
            transaction => transaction.executeSql('SELECT * FROM recipe WHERE favorite = 1 ORDER BY title', [], (_, result) => {

                let rcps = [];
                result.rows._array.forEach(e => {
                    rcps.push({
                        id: e.id,
                        image: null,
                        title: e.title,
                        duration: e.duration,
                        nationality: e.nationality,
                        ingredients: JSON.parse(e.ingredients),
                        preparation: e.preparation,
                        favorite: e.favorite,
                        author: e.author,
                        createdAt: e.createdAt
                    });
                });

                this.setState({ recipes: rcps });
            }
            )
        );
    }


    render() {

        let recipes = this.state.recipes.map((recipe, i) => {
            return (
                <FavoritesListItem
                    key={'recipe_' + i}
                    title={recipe.title}
                    duration={recipe.duration}
                    nationality={recipe.nationality}
                    image={recipe.image}
                    favorite={recipe.favorite}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Recipe', { recipe });
                            Haptics.impactAsync('light')
                        }
                    }
                />
            );
        });

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {recipes}
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    scrollContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
});