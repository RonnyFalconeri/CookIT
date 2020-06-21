import * as React from 'react';
import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet, View } from 'react-native';

import FavoritesListItem from '../components/FavoritesListItem';
import CustomFont from '../components/CustomFont';
import SearchButton from '../components/SearchButton';

export default class Favorites extends React.Component {
    state = {
        recipes: [
            {
                id: 'default_1',
                image: require('../../assets/images/trofie.jpg'),
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
                image: require('../../assets/images/guacamole.jpg'),
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
                id: 'default_5',
                image: require('../../assets/images/sarma.jpg'),
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
            }
        ],
        filter: null
    };


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Favoriten</CustomFont> });
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