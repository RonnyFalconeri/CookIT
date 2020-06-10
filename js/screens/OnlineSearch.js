import * as React from 'react';
import Axios from 'axios';
import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import OnlineSearchListItem from '../components/OnlineSearchListItem';
import CustomFont from '../components/CustomFont';
import TitleInput from '../components/TitleInput';


export default class OnlineSearch extends React.Component {
    state = {
        search: {
            title: '',
            buttonLabel: 'Suchen',
            result: 'Top 50 Recipes:',
            buttonColor: '#134f5c'
        },
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
                saved: true,
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
                saved: true,
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
                saved: false,
                author: 'Ennio Morricone',
                createdAt: '00:00 Uhr, 2. Mai 2020'
            }
        ]
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Online-Suche</CustomFont> });

        // init input ref
        this.searchInput = React.createRef();

        // init list of top 50 recipes
        this._searchTopRecipes()
    }


    _handleTitleInput(value) {
        // update title in state.recipe
        this.setState(prevState => {
            let search = { ...prevState.search };
            search['title'] = value;
            return { search }
        });
    }

    _searchStart() {
        let searchTerm = this.state.search.title;

        if (searchTerm === '') {
            // if search is empty -> show top 50 recipes
            this.setState({
                search: {
                    title: '',
                    result: 'Top 50 Recipes:',
                    buttonLabel: 'Suchen',
                    buttonColor: '#134f5c'
                }
            }, () => {
                this.searchInput.clear();
                this._searchTopRecipes();
            });
        } else {
            // search recipes based on term
            this.setState({
                search: {
                    title: '',
                    result: 'Suche: ' + searchTerm,
                    buttonLabel: 'Löschen',
                    buttonColor: '#85200c'
                }
            }, () => {
                this.searchInput.clear();
                this._searchRecipe(searchTerm);
            });
        }

    }

    _searchTopRecipes() {
        // TODO: API-Query -> TOP 50 recipes, stored in state.recipes
        console.log('searching top recipes...');
    }

    _searchRecipe = async (term) => {
        const APP_ID = "3653dc15";
        const APP_KEY = "e34c9b96d20ff2a7ed87bd02c391e9e9";
        const url = `https://api.edamam.com/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const result = await Axios.get(url);

        let recipesArray = [];
        result.data.hits.forEach(e => {
            let ingr = [];
            e.recipe.ingredientLines.forEach(i => {
                ingr.push({
                    amount: i.split(' ')[0] + i.split(' ')[1],
                    ingredient: String(i.split(' ').slice(2)).replace(',', ' ')
                });
            });

            recipesArray.push({
                image: e.recipe.image,
                title: e.recipe.label,
                duration: e.recipe.totalTime,
                nationality: 'none',
                ingredients: ingr,
                preparation: 'Online-Rezepte haben keinen Zubereitungstext.',
                saved: false,
                author: 'API',
                createdAt: Date.now()
            });
        });
        console.log(recipesArray);
        this.setState({ recipes: recipesArray });

    }


    render() {

        let recipes = this.state.recipes.map((recipe, i) => {
            return (
                <OnlineSearchListItem
                    key={'recipe_' + i}
                    title={recipe.title}
                    duration={recipe.duration}
                    nationality={recipe.nationality}
                    image={recipe.image}
                    saved={recipe.saved}
                    onPress={
                        () => {
                            this.props.navigation.navigate('OnlineRecipe', { recipe });
                            Haptics.impactAsync('light')
                        }
                    }
                />
            );
        });


        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TitleInput
                    refName={ref => { this.searchInput = ref; }}
                    value={this.state.search.title}
                    onChange={(value) => this._handleTitleInput(value)}
                />

                <TouchableOpacity
                    style={[{ backgroundColor: this.state.search.buttonColor }, styles.search]}
                    onPress={() => {
                        this._searchStart();
                        //Haptics.impactAsync('heavy')
                    }}
                >
                    <Text style={styles.search_label}>{this.state.search.buttonLabel}</Text>
                </TouchableOpacity>

                <Text style={styles.result}>{this.state.search.result}</Text>

                {recipes}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    search: {
        height: 65,
        width: '65%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    search_label: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    result: {
        color: 'black',
        fontSize: 20,
        marginTop: 10
    }
});