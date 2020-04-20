import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Rezepte_ListItem from '../components/Rezepte_ListItem';


export default class Rezepte extends React.Component {
    state = {
        recipes: [
            { title: "Spaghetti Bolognese", duration: "14 Min", nationality: "ITA", image: null },
            { title: "Spaghetti Bolognese", duration: "14 Min", nationality: "ITA", image: null },
            { title: "Spaghetti Bolognese", duration: "14 Min", nationality: "ITA", image: null }
        ]
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezepte' });
    }

    render() {

        let recipes = this.state.recipes.map((key, i) => {
            return (
                < Rezepte_ListItem
                    key={'recipe_' + i}
                    title={key.title}
                    duration={key.duration}
                    nationality={key.nationality}
                    image={key.image}
                    onPress={() => this.props.navigation.navigate('Rezept')}
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