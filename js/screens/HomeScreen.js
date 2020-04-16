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
                    color="#03a5fc"
                />

                <HomeScreen_ListItem
                    title="Rezept"
                    onPress={() => this.props.navigation.navigate('Rezept')}
                    color="green"
                />

                <HomeScreen_ListItem
                    title="Neues Rezept"
                    onPress={() => this.props.navigation.navigate('Neues_Rezept')}
                    color="blue"
                />

                <HomeScreen_ListItem
                    title="Online Rezept"
                    onPress={() => this.props.navigation.navigate('Online_Rezept')}
                    color="purple"
                />

                <HomeScreen_ListItem
                    title="Favoriten"
                    onPress={() => this.props.navigation.navigate('Favoriten')}
                    color="purple"
                />

                <HomeScreen_ListItem
                    title="Zufällig"
                    onPress={() => this.props.navigation.navigate('Zufällig')}
                    color="purple"
                />

                <HomeScreen_ListItem
                    title="Online_Suche"
                    onPress={() => this.props.navigation.navigate('Online_Suche')}
                    color="purple"
                />

            </ScrollView>
        );
    }
}