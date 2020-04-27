import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


export default class SaveButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/images/saveIcon.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30
    }
});

