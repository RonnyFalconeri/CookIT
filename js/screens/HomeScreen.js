import * as React from 'react';
import { ScrollView } from 'react-native';

import HomeScreenListItem from '../components/HomeScreenListItem';


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

                <HomeScreenListItem
                    title="Rezepte"
                    onPress={() => this.props.navigation.navigate('Recipes')}
                    color="#6d9eeb"
                    image={require('../../assets/images/rezepteBackground.png')}
                />

                <HomeScreenListItem
                    title="Neues Rezept"
                    onPress={() => this.props.navigation.navigate('NewRecipe', { edit: false })}
                    color="#93c47d"
                    image={require('../../assets/images/neuesRezeptBackground.png')}
                />

                <HomeScreenListItem
                    title="Favoriten"
                    onPress={() => this.props.navigation.navigate('Favorites')}
                    color="#8e7cc3"
                    image={require('../../assets/images/favoritenBackground.png')}
                />

                <HomeScreenListItem
                    title="Online-Suche"
                    onPress={() => this.props.navigation.navigate('OnlineSearch')}
                    color="#76a5af"
                    image={require('../../assets/images/onlineSucheBackground.png')}
                />

                <HomeScreenListItem
                    title="Zufällig"
                    onPress={() => this.props.navigation.navigate('RandomRecipe')}
                    color="#f6b26b"
                    image={require('../../assets/images/zufälligBackground.png')}
                />

                <HomeScreenListItem
                    title="Einstellungen"
                    onPress={() => this.props.navigation.navigate('Settings')}
                    color="#dd7e6b"
                    image={require('../../assets/images/einstellungenBackground.png')}
                />

            </ScrollView>
        );
    }
}