import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import CustomFont from '../components/CustomFont';
import Separator from '../components/Separator';


export default class Impressum extends React.Component {


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Impressum</CustomFont> });
    }


    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.headline}>CookIT</Text>
                <Text style={styles.paragraph}>Ein Projekt für den Abschluss zum "Bachelor of Science" an der</Text>
                <Text style={styles.marked}>DHBW Lörrach</Text>
                <Text style={styles.paragraph}>im Studiengang "Angewandte Informatik"{'\n'}Semester 6, Juni 2020</Text>

                <Separator />

                <Text style={styles.headline}>Created By</Text>
                <Text style={styles.paragraph}>Ronny Falconeri{'\n'}https://github.com/RonnyFalconeri</Text>
                <Text style={styles.paragraph}>Mert Topcuoglu{'\n'}https://github.com/Mert69</Text>

                <Separator />

                <Text style={styles.headline}>Dankeschön</Text>
                <Text style={styles.paragraph}>Ein herzliches Dankeschön geht an</Text>
                <Text style={styles.paragraph}>Claudia Falconeri{'\n'}Silan Yüzükan{'\n'}Wenjie Wang</Text>
                <Text style={styles.paragraph}>die sich die Zeit genommen haben, leckere Rezepte für CookIT zu schreiben. So mancher Hunger wird mit euren bunten Mahlzeiten gestillt.</Text>

                <Separator />

                <Text style={styles.headline}>Grüße</Text>
                <Text style={styles.paragraph}>Ein Gruß geht raus an den Kurs</Text>
                <Text style={styles.marked}>TIF17A</Text>
                <Text style={styles.paragraph}>dass an seinem letzten Theoriesemester durch die globale Pandemie leider nicht zusammenfinden konnte.</Text>

                <Separator />

                <Text style={styles.marked2}>Dedicated to the George Floyd Protests - Color is not a crime</Text>
                <Text style={styles.marked2}>“I have decided to stick with love. Hate is too great a burden to bear.” – Martin Luther King Jr.</Text>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    headline: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#cc0000ff'
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 7
    },
    marked: {
        textAlign: 'center',
        fontSize: 19,
        marginVertical: 3,
        fontWeight: 'bold'
    },
    marked2: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 7,
        fontStyle: 'italic'
    }
});