import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

export default class TextCustom extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'pacifico': require('../../assets/fonts/Pacifico.ttf')
        })
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator />
        }
        return (
            <Text style={styles.defaultStyle}>
                {this.props.children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'pacifico'
    }
})