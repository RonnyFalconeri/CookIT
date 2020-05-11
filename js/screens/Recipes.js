import * as React from 'react';
import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet } from 'react-native';

import RecipesListItem from '../components/RecipesListItem';
import CustomFont from '../components/CustomFont';


export default class Recipes extends React.Component {
    state = {
        recipes: [
            {
                id: 1,
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                favorite: true,
                author: 'Ronny Falconeri',
                createdAt: '12:35 Uhr, 8. März 2020'
            },
            {
                id: 2,
                image: null,
                title: 'Spaghetti Carbonara',
                duration: '15',
                nationality: 'ita',
                ingredients: [
                    { amount: '200g', ingredient: 'Spaghetti' },
                    { amount: '10g', ingredient: 'Bauchspeck geschnitten' },
                    { amount: '2', ingredient: 'Sahne' }

                ],
                preparation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.',
                favorite: true,
                author: 'Mert Topcuoglu',
                createdAt: '13:22 Uhr, 10. April 2020'
            },
            {
                id: 3,
                image: null,
                title: 'Quacamole',
                duration: '4',
                nationality: 'gre',
                ingredients: [
                    { amount: '2', ingredient: 'Avocados' },
                    { amount: '3', ingredient: 'Tomaten' },
                    { amount: '1', ingredient: 'Zwiebel' },
                    { amount: '2', ingredient: 'Chilli' }
                ],
                preparation: '15 Minuten Kochen, dann salzen.',
                favorite: false,
                author: 'Ennio Morricone',
                createdAt: '00:00 Uhr, 2. Mai 2020'
            }
        ]
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Rezepte</CustomFont> });
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
                            Haptics.impactAsync('light')
                        }
                    }
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