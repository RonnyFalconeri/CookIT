import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';


export default class Rezepte extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezepte' });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
                <ListItem
                    title="Spaghetti Bolognese"
                    duration="14 Min"
                    nationality="ITA"
                    image={require('../../assets/icon.png')}
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
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