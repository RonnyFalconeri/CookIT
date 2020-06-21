import * as React from 'react';
import * as SQLite from 'expo-sqlite';
import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet, View } from 'react-native';

import RecipesListItem from '../components/RecipesListItem';
import CustomFont from '../components/CustomFont';
import SearchButton from '../components/SearchButton';


const database = SQLite.openDatabase('recipes.db');

export default class Recipes extends React.Component {
    state = {
        recipes: [],
        filter: null
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Rezepte</CustomFont> });

        // select recipes from DB
        this._retrieveRecipes();
    }

    _retrieveRecipes() {
        database.transaction(
            transaction => transaction.executeSql('SELECT * FROM recipe', [], (_, result) => {

                let rcps = [];
                result.rows._array.forEach(e => {
                    rcps.push({
                        id: e.id,
                        image: null,
                        title: e.title,
                        duration: e.duration,
                        nationality: e.nationality,
                        ingredients: Array(e.ingredients),
                        preparation: e.preparation,
                        favorite: e.favorite,
                        author: e.author,
                        createdAt: e.createdAt
                    });
                    console.log(e.duration);
                });

                this.setState({ recipes: rcps });
            }
            )
        );
    }

    render() {

        let recipes = this.state.recipes.map((recipe, i) => {
            return (
                <RecipesListItem
                    key={'recipe_' + i}
                    title={recipe.title}
                    duration={recipe.duration}
                    nationality={recipe.nationality}
                    image={recipe.image}
                    favorite={recipe.favorite}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Recipe', { recipe });
                            Haptics.impactAsync('light');
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

                <SearchButton
                    onChange={(filter) => this.setState({ filter: filter })}
                />

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