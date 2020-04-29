import * as React from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';

import CustomFont from '../components/CustomFont';
import Separator from '../components/Separator';


export default class Settings extends React.Component {


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Einstellungen</CustomFont> });
    }

    _deleteRecipes() {
        // TODO: delete recipes from DB, only default recipes left
        console.log('delete all recipes...');
    }


    render() {
        return (
            <View style={styles.container}>

                <Separator />
                <Text style={styles.headline}>Datenbank</Text>
                <Text style={styles.paragraph}>Die Datenbank mit allen Rezepten auf den Anfangszustand zurücksetzen.</Text>
                <Button
                    title="Rezepte zurücksetzen"
                    onPress={() => Alert.alert('Zurücksetzen', 'Die Rezepte werden unwiederuflich gelöscht. Sollen sie wirklich entfernt werden?', [
                        { text: 'Rezepte löschen', style: 'destructive', onPress: () => this._deleteRecipes() },
                        { text: 'Abbrechen', style: 'cancel' }
                    ])}
                />
                <Separator />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    headline: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10
    },
    paragraph: {
        textAlign: 'center'
    }
});