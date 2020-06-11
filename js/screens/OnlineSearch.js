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
            buttonLabel: 'Zufällig',
            result: 'Random',
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
            }
        ]
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Online-Suche</CustomFont> });

        // init input ref
        this.searchInput = React.createRef();

        // search random recipe at start
        this._searchStart();
    }


    _handleTitleInput(value) {
        // update title in state.recipe
        this.setState(prevState => {
            let search = { ...prevState.search };
            search['buttonLabel'] = "Suchen";
            search['title'] = value;
            return { search }
        });
    }

    _searchStart() {
        let searchTerm = this.state.search.title;

        if (searchTerm === '') {
            const labelstr = "Almonds,Apple,Apricot,Asparagus,Avocado,Banana,Barley,Basil,Beef,Beet Greens,Beets,Bell Peppers,Black Beans,Black Pepper,Blueberries,Bok Choy,Broccoli,Brown Rice,Brussels Sprouts,Buckwheat,Cabbage,Cantaloupe,Carrots,Cashews,Cauliflower,Celery,Cheese,Chicken,Chili Peppers,Cilantro,Cinnamon,Cloves,Cod,Collard Greens,Corn,Cow's milk,Cranberries,Cucumber,Cumin,Dill,Dried Peas,Eggplant,Eggs,Fennel,Figs,Flaxseeds,Garbanzo Beans,Garlic,Ginger,Grapefruit,Grapes,Green Beans,Green Peas,Kale,Kidney Beans,Kiwifruit,Lamb,Leeks,Lemons and Limes,Lentils,Lima Beans,Millet,Miso,Mushrooms, Crimini,Mushrooms, Shiitake,Mustard Greens,Mustard Seeds,Navy Beans,Oats,Olive Oil,Olives,Onions,Oranges,Oregano,Papaya,Parsley,Peanuts,Pear,Peppermint,Pineapple,Pinto Beans,Plum,Potatoes,Pumpkin Seeds,Quinoa,Raisins,Raspberries,Romaine Lettuce,Rosemary,Rye,Sage,Salmon,Sardines,Scallops,Sea Vegetables,Sesame Seeds,Shrimp,Soy Sauce,Soybeans,Spinach,Strawberries,Summer Squash,Sunflower Seeds,Sweet Potato,Swiss Chard,Tempeh,Thyme,Tofu,Tomatoes,Tuna,Turkey,Turmeric,Turnip Greens,Walnuts,Watermelon,Wheat,Winter Squash,Yogurt";
            const recipeLabels = labelstr.split(',');

            // select random label
            let randomRecipe = recipeLabels[Math.floor(Math.random() * recipeLabels.length)]

            // if search is empty -> search random recipe
            this.setState({
                search: {
                    title: '',
                    result: 'Zufällig-Suche: ' + randomRecipe,
                    buttonLabel: 'Zufällig',
                    buttonColor: '#134f5c'
                }
            }, () => {
                this.searchInput.clear();
                this._searchRecipe(randomRecipe);
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


    _searchRecipe = async (term) => {

        // make API call
        const APP_ID = "3653dc15";
        const APP_KEY = "e34c9b96d20ff2a7ed87bd02c391e9e9";
        const url = `https://api.edamam.com/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const result = await Axios.get(url);

        // parse received data
        let recipesArray = [];
        result.data.hits.forEach(e => {
            // for every recipe ...

            let ingr = [];
            e.recipe.ingredientLines.forEach(i => {
                // for every ingredient in given recipe
                ingr.push({
                    /*
                        ingredient as string "1 tablespoon of blabla blublu"
                        amount -> first two words "1 tablespoon"
                        ingredient -> rest of string "blabla blublu"
                    */
                    amount: i.split(' ')[0] + i.split(' ')[1],
                    ingredient: String(i.split(' ').slice(2)).replace(',', ' ')
                });
            });

            // specify recipe data in compatible object format 
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

        // store loaded API recipes in state
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