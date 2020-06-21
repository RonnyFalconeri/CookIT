import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Add2FavoritesButton from '../components/Add2FavoritesButton';
import CustomFont from '../components/CustomFont';


export default class RandomRecipe extends React.Component {
    state = {
        recipe: {
            id: 'default_3',
            image: require('../../assets/images/dorate.jpg'),
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
        image_default: require('../../assets/images/defaultRecipeImage.png')
    };


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Zufällig</CustomFont> });
        console.log(this.state.recipe);
    }

    _nextRandomRecipe() {
        // TODO: select a new random recipe from DB
        console.log('next recipe');
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    key={'default'}
                    style={styles.image}
                    source={this.state.recipe.image}
                />

                <Add2FavoritesButton
                    styling={{ position: 'absolute', top: 17, left: 20 }}
                    favorite={this.state.recipe.favorite}
                />

                <Text style={styles.title}>
                    {this.state.recipe.title}
                </Text>

                <View style={styles.containerDurationNationality}>
                    <Text style={styles.duration}>{this.state.recipe.duration} Min</Text>
                    <Text style={styles.separator}> | </Text>
                    <Text style={styles.nationality}>{this.state.recipe.nationality}</Text>
                </View>

                <TouchableOpacity
                    style={styles.kochen}
                    onPress={() => this.props.navigation.navigate('Recipe', { recipe: this.state.recipe })}
                >
                    <Text style={styles.kochen_label}>Kochen!</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.weiter}
                    onPress={() => this._nextRandomRecipe()}
                >
                    <Text style={styles.weiter_label}>Weiter</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    image: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        margin: 20
    },
    containerDurationNationality: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    duration: {
        width: 100,
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'right'
    },
    separator: {
        width: 70,
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'center'
    },
    nationality: {
        width: 100,
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'left'
    },
    kochen: {
        height: 65,
        width: 230,
        backgroundColor: '#f6b26b',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 30,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    kochen_label: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    weiter: {
        height: 50,
        width: 200,
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    weiter_label: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }
});