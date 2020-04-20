import * as React from 'react';
import { View } from 'react-native';


export default class Separator extends React.Component {
    render() {
        return (
            <View style={{
                width: '70%',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                marginVertical: 30
            }} />
        );
    }
}

