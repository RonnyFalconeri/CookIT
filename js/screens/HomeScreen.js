import * as React from 'react';
import { ScrollView } from 'react-native';

import HomeScreen_ListItem from '../components/HomeScreen_ListItem';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                style={{ paddingTop: 20 }}
                decelerationRate={0}
                snapToInterval={340}
                snapToAlignment={'center'}
            >

                <HomeScreen_ListItem
                    title="Rezepte"
                    onPress={() => this.props.navigation.navigate('Recipes')}
                    color="#6d9eeb"
                    image={require('../../assets/images/rezepteBackground.png')}
                />

                <HomeScreen_ListItem
                    title="Neues Rezept"
                    onPress={() => this.props.navigation.navigate('NewRecipe', { edit: false })}
                    color="#93c47d"
                    image={require('../../assets/images/neuesRezeptBackground.png')}
                />

                <HomeScreen_ListItem
                    title="Favoriten"
                    onPress={() => this.props.navigation.navigate('Favorites')}
                    color="#8e7cc3"
                    image={require('../../assets/images/favoritenBackground.png')}
                />

                <HomeScreen_ListItem
                    title="Online-Suche"
                    onPress={() => this.props.navigation.navigate('OnlineSearch')}
                    color="#76a5af"
                    image={require('../../assets/images/onlineSucheBackground.png')}
                />

                <HomeScreen_ListItem
                    title="Zufällig"
                    onPress={() => this.props.navigation.navigate('RandomRecipe')}
                    color="#f6b26b"
                    image={require('../../assets/images/zufälligBackground.png')}
                />

                <HomeScreen_ListItem
                    title="Einstellungen"
                    onPress={() => this.props.navigation.navigate('Settings')}
                    color="#dd7e6b"
                    image={require('../../assets/images/einstellungenBackground.png')}
                />

            </ScrollView>
        );
    }
}