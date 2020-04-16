import * as React from 'react';
import { ScrollView, StyleSheet, DevSettings } from 'react-native';

import Rezepte_ListItem from '../components/Rezepte_ListItem';

const recipes = [
    { title: "Spaghetti Bolognese", duration: "14Min", nationality: "ITA", image: "fd", onPress: "fjj" },
    { title: "gjj", duration: "gjf", nationality: "gfk", image: "fkh", onPress: "hk" },
    { title: "zjh", duration: "jjjj", nationality: "jhj", image: "ghk", onPress: "jjj" }
];

export default class Rezepte extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezepte' });
    }

    render() {
        const ds = recipes;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {ds.forEach(recipe =>
                    < Rezepte_ListItem
                        title={recipe.title}
                        duration={recipe.title}
                        nationality={recipe.title}
                        image={require('../../assets/icon.png')}
                        onPress={() => this.props.navigation.navigate('Rezept')}
                    />
                )}
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