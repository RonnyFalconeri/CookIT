import * as React from 'react';
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
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                saved: true
            },
            {
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
                saved: true
            }, {
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
                saved: false
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
                this._searchRecipe();
            });
        }

    }

    _searchTopRecipes() {
        // TODO: API-Query -> TOP 50 recipes, stored in state.recipes
        console.log('searching top recipes...');
    }

    _searchRecipe() {
        // TODO: API-Query -> recipe(s) based on given term, stored in state.recipes
        console.log('searching recipe...');
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
                    onPress={() => this._searchStart()}
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