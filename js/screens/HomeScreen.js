import * as React from 'react';
import * as Haptics from 'expo-haptics';
import { ScrollView, View, StyleSheet } from 'react-native';

import HomeScreenListItem from '../components/HomeScreenListItem';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';


export default class HomeScreen extends React.Component {
    state = { index: 0 };


    _handleScroll(offset) {
        let index = Math.floor(offset / 322.66);
        this.setState({ index: index });
    }


    render() {
        return (
            <View style={styles.container}>

                <ScrollView
                    horizontal={true}
                    style={styles.list}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    snapToInterval={340}
                    snapToAlignment={'center'}
                    onMomentumScrollBegin={() => Haptics.impactAsync('light')}
                    onMomentumScrollEnd={event => this._handleScroll(event.nativeEvent.contentOffset.x)}
                >

                    <HomeScreenListItem
                        title="Rezepte"
                        onPress={() => this.props.navigation.navigate('Recipes')}
                        color="#6d9eeb"
                        image={require('../../assets/images/recipesBg.png')}
                    />

                    <HomeScreenListItem
                        title="Neues Rezept"
                        onPress={() => this.props.navigation.navigate('NewRecipe')}
                        color="#93c47d"
                        image={require('../../assets/images/newRecipeBg.png')}
                    />

                    <HomeScreenListItem
                        title="Favoriten"
                        onPress={() => this.props.navigation.navigate('Favorites')}
                        color="#8e7cc3"
                        image={require('../../assets/images/favoritesBg.png')}
                    />

                    <HomeScreenListItem
                        title="Online-Suche"
                        onPress={() => this.props.navigation.navigate('OnlineSearch')}
                        color="#76a5af"
                        image={require('../../assets/images/onlineSearchBg.png')}
                    />

                    <HomeScreenListItem
                        title="Zufällig"
                        onPress={() => this.props.navigation.navigate('RandomRecipe')}
                        color="#f6b26b"
                        image={require('../../assets/images/randomRecipeBg.png')}
                    />

                    <HomeScreenListItem
                        title="Einstellungen"
                        onPress={() => this.props.navigation.navigate('Settings')}
                        color="#dd7e6b"
                        image={require('../../assets/images/settingsBg.png')}
                    />

                </ScrollView>


                <ScrollIndicator index={this.state.index} />
                <Footer />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    list: {
        paddingTop: 20
    }
});