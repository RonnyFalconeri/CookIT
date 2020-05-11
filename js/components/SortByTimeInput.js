import * as React from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';


export default class SortByTimeInput extends React.Component {
    state = {
        recipeFilter: this.props.value
    };


    _handleChange(byNew, value) {
        if (byNew) {
            this.setState(prevState => {
                let recipeFilter = { ...prevState.recipeFilter };
                recipeFilter['sortByNew'] = value;
                if (value) {
                    recipeFilter['sortByOld'] = !value;
                }
                return { recipeFilter }
            }, () => this.props.onChange(this.state.recipeFilter));
        } else {
            this.setState(prevState => {
                let recipeFilter = { ...prevState.recipeFilter };
                recipeFilter['sortByOld'] = value;
                if (value) {
                    recipeFilter['sortByNew'] = !value;
                }
                return { recipeFilter }
            }, () => this.props.onChange(this.state.recipeFilter));
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Zeitlich soriteren</Text>

                <View style={styles.switcho}>
                    <Text style={styles.label}>Neuste zuerst: </Text>
                    <Switch
                        value={this.state.recipeFilter.sortByNew}
                        onValueChange={value => this._handleChange(true, value)}
                    />
                </View>

                <View style={styles.switcho}>
                    <Text style={styles.label}>Älteste zuerst: </Text>
                    <Switch
                        value={this.state.recipeFilter.sortByOld}
                        onValueChange={value => this._handleChange(false, value)}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    switcho: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    label: {
        marginHorizontal: 5,
        fontSize: 18
    }
});
