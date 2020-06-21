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

        let query = 'SELECT * FROM recipe ORDER BY title';

        //console.log(this.state.filter);

        if (this.state.filter != null) {

            let where1 = '';
            let and1 = false;

            if (this.state.filter.duration != null ||
                this.state.filter.nationality != null ||
                this.state.filter.title != null ||
                this.state.filter.author != null) {
                where1 = ' WHERE ';
            }


            let dur = this.state.filter.duration;
            if (dur == null) {
                dur = ''
            } else {
                dur = where1 + 'duration="' + this.state.filter.duration + '" ';
                and1 = true;
                where1 = '';
            }

            let nat = this.state.filter.nationality;
            if (nat == null) {
                nat = ''
            } else {
                let x = '';
                if (and1) x = 'AND ';
                nat = where1 + x + 'nationality="' + this.state.filter.nationality + '" ';
                and1 = true;
                where1 = '';
            }

            let tit = this.state.filter.title; //lol 
            if (tit == null) {
                tit = ''
            } else {
                let x = '';
                if (and1) x = 'AND ';
                tit = where1 + x + 'title LIKE "' + this.state.filter.title + '%" ';
                and1 = true;
                where1 = '';
            }

            let aut = this.state.filter.author;
            if (aut == null) {
                aut = ''
            } else {
                let x = '';
                if (and1) x = 'AND ';
                aut = where1 + x + 'author LIKE "' + this.state.filter.author + '%" ';
                and1 = true;
                where1 = '';
            }

            query = 'SELECT * FROM recipe' + dur + nat + tit + aut + ' ORDER BY title';

            //console.log(query);
        }


        database.transaction(
            transaction => transaction.executeSql(query, [], (_, result) => {

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


                if (this.state.filter != null) {
                    if (this.state.filter.sortByOld) {
                        rcps.sort((a, b) => {
                            let dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
                            return dateA - dateB;
                        });
                    }

                    if (this.state.filter.sortByNew) {
                        rcps.sort((a, b) => {
                            let dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
                            return dateB - dateA;
                        });
                    }
                }

                //console.log(rcps);

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
                    onChange={(filter) => this.setState({ filter: filter }, () => this._retrieveRecipes())}
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