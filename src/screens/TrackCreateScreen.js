<<<<<<< HEAD
import React, { useContext, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Map from '../components/Map';
// import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native'; 
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({callback}) => {
    const { state : { recording }, addLocation } = useContext(LocationContext);
    const callBack = useCallback((location) => {
        console.log("New location received:", JSON.stringify(location, null, 2));
        addLocation(location, recording);
    }, [recording]);
    
    const isFocused = useIsFocused(); 
    const [err] = useLocation(isFocused || recording, callBack ); 

    console.log(isFocused);

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <Text style={styles.text}>Create a Track</Text>
            {err && <Text style={styles.errorText}>{err}</Text>}
            <Map />
            <TrackForm/>
        </SafeAreaView>
    );
};
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackCreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Track Create Screen</Text>
        </View>
    );
}
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 60
=======
        justifyContent: 'center',
        alignItems: 'center',
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
<<<<<<< HEAD
        color: 'black',
        marginBottom: 20
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
=======
        color: 'blue',
    },
})
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b

export default TrackCreateScreen;
