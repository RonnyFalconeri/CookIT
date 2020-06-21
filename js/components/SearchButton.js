import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Modal, Text, Button, ScrollView } from 'react-native';

import CustomFont from '../components/CustomFont';
import TitleInput from './TitleInput';
import DurationInput from '../components/DurationInput';
import NationalityInput from '../components/NationalityInput';
import AuthorInput from '../components/AuthorInput';
import SortByTimeInput from '../components/SortByTimeInput';


export default class SearchButton extends React.Component {
    state = {
        recipeFilter: {
            title: null,
            duration: null,
            nationality: null,
            author: null,
            sortByNew: false,
            sortByOld: false
        },
        modalVisible: false
    };


    _handleTitleInput(value) {
        this.setState(prevState => {
            let recipeFilter = { ...prevState.recipeFilter };
            recipeFilter['title'] = value;
            return { recipeFilter }
        });
    }

    _handleDurationInput(value) {
        this.setState(prevState => {
            let recipeFilter = { ...prevState.recipeFilter };
            recipeFilter['duration'] = value;
            return { recipeFilter }
        });
    }

    _handleNationalityInput(value) {
        this.setState(prevState => {
            let recipeFilter = { ...prevState.recipeFilter };
            recipeFilter['nationality'] = value;
            return { recipeFilter }
        });
    }

    _handleSortByTimeInput(value) {
        this.setState(prevState => {
            let recipeFilter = { ...prevState.recipeFilter };
            recipeFilter['sortByNew'] = value.sortByNew;
            recipeFilter['sortByOld'] = value.sortByOld;
            return { recipeFilter }
        });
    }

    _handleAuthorInput(value) {
        this.setState(prevState => {
            let recipeFilter = { ...prevState.recipeFilter };
            recipeFilter['author'] = value;
            return { recipeFilter }

        });
    }

    _resetFilter() {
        this.setState({
            recipeFilter: {
                title: null,
                duration: null,
                nationality: null,
                author: null,
                sortByNew: false,
                sortByOld: false
            }
        });
    }


    render() {

        return (
            <View>

                <TouchableOpacity style={styles.button} onPress={() => this.setState({ modalVisible: true })} >
                    <Image style={styles.image} source={require('../../assets/images/searchIcon.png')} />
                </TouchableOpacity>

                <Modal visible={this.state.modalVisible} animationType="slide" >

                    <ScrollView style={styles.filterList}>

                        <View>
                            <Text style={styles.headerTitle}><CustomFont>Liste Filtern</CustomFont></Text>
                            <Image style={styles.headerImage} source={require('../../assets/icon.png')} />
                        </View>

                        <View style={styles.inputs}>
                            <TitleInput
                                value={this.state.recipeFilter.title}
                                onChange={(value) => this._handleTitleInput(value)}
                            />

                            <DurationInput
                                value={this.state.recipeFilter.duration}
                                onChange={(value) => this._handleDurationInput(value)}
                            />

                            <NationalityInput
                                selectedValue={this.state.recipeFilter.nationality}
                                onChange={(Value) => this._handleNationalityInput(Value)}
                            />

                            <AuthorInput
                                value={this.state.recipeFilter.author}
                                onChange={(value) => this._handleAuthorInput(value)}
                            />

                            <SortByTimeInput
                                value={this.state.recipeFilter}
                                onChange={(value) => this._handleSortByTimeInput(value)}
                            />
                        </View>


                        <Button
                            title="Anwenden"
                            onPress={() => {
                                this.props.onChange(this.state.recipeFilter);
                                this.setState({ modalVisible: false });
                            }}
                        />

                        <Button
                            title="Zurücksetzen"
                            onPress={() => {
                                this._resetFilter();
                            }}
                        />

                    </ScrollView>
                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        height: 64,
        width: 64,
        padding: 7,
        borderRadius: 40,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 30,
        right: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    image: {
        height: 50,
        width: 50
    },
    headerImage: {
        position: 'absolute',
        height: 450,
        width: 450,
        top: -130,
        left: -120,
        opacity: 0.2
    },
    filterList: {
        padding: 30,
        paddingTop: 50,
        backgroundColor: 'white'
    },
    headerTitle: {
        fontSize: 45,
        alignSelf: 'center'
    },
    inputs: {
        alignItems: 'center'
    }
});
