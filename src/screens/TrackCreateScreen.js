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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 60
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default TrackCreateScreen;
