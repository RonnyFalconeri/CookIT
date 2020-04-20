import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';


export default class EditButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/images/editIcon.png')}
                />
            </TouchableOpacity>
        );
    }
}

