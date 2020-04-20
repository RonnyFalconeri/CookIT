import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Rezepte_ListItem from '../components/Rezepte_ListItem';


export default class Rezepte extends React.Component {
    state = {
        recipes: [
            {
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14 Min',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: '15 Minuten Kochen, dann salzen.'
            },
            {
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14 Min',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: '15 Minuten Kochen, dann salzen.'
            }, {
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14 Min',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: '15 Minuten Kochen, dann salzen.'
            }
        ]
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezepte' });
    }

    render() {

        let recipes = this.state.recipes.map((recipe, i) => {
            return (
                <Rezepte_ListItem
                    key={'recipe_' + i}
                    title={recipe.title}
                    duration={recipe.duration}
                    nationality={recipe.nationality}
                    image={recipe.image}
                    onPress={() => this.props.navigation.navigate('Rezept', { recipe })}
                />
            );
        });

        return (
            <ScrollView contentContainerStyle={styles.container}>
                {recipes}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    }
});