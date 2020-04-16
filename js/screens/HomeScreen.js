import * as React from 'react';
import { Text, Button, TouchableOpacity, ScrollView } from 'react-native';

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
                    onPress={() => this.props.navigation.navigate('Rezepte')}
                    color="#6d9eeb"
                    image={require('../../assets/images/backgroundimage.png')}
                />

                <HomeScreen_ListItem
                    title="Neues Rezept"
                    onPress={() => this.props.navigation.navigate('Neues_Rezept')}
                    color="#93c47d"
                    image={require('../../assets/images/backgroundimage.png')}
                />

                <HomeScreen_ListItem
                    title="Online Rezept"
                    onPress={() => this.props.navigation.navigate('Online_Rezept')}
                    color="#c27ba0"
                    image={require('../../assets/images/backgroundimage.png')}
                />

                <HomeScreen_ListItem
                    title="Favoriten"
                    onPress={() => this.props.navigation.navigate('Favoriten')}
                    color="#8e7cc3"
                    image={require('../../assets/images/backgroundimage.png')}
                />

                <HomeScreen_ListItem
                    title="Zufällig"
                    onPress={() => this.props.navigation.navigate('Zufällig')}
                    color="#f6b26b"
                    image={require('../../assets/images/backgroundimage.png')}
                />

                <HomeScreen_ListItem
                    title="Online-Suche"
                    onPress={() => this.props.navigation.navigate('Online_Suche')}
                    color="#76a5af"
                    image={require('../../assets/images/backgroundimage.png')}
                />

            </ScrollView>
        );
    }
}