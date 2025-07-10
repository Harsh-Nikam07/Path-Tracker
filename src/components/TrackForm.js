import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useContext } from 'react'
import { Input } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state : { name, recording, locations }, startRecording, stopRecording, changeTrackName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    // console.log(locations.length)
  return (
    <View style={styles.container}>
      <Input 
        placeholder='Track Name'
        value={name}
        onChangeText={changeTrackName}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        inputContainerStyle={styles.inputInnerContainer}
      />
        {
            recording ? (
                <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={stopRecording}>
                  <Text style={styles.buttonTitle}>Stop</Text>
                  {/* <Foundation name="stop" size={18} color="white" style={styles.icon} /> */}
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={[styles.button, styles.recordButton]} onPress={startRecording}>
                  <Text style={styles.buttonTitle}>Record</Text>
                  {/* <Foundation name="record" size={18} color="white" style={styles.icon} /> */}
                </TouchableOpacity>
            )
        }

        {
          !recording && locations.length ? (
            <TouchableOpacity style={[styles.button, styles.recordButton]} onPress={saveTrack}>
              <Text style={styles.buttonTitle}>Save Track</Text>
              <MaterialIcons name="save-alt" size={18} color="white" style={styles.icon} />
            </TouchableOpacity>
          ) : null
        }



    </View>
  )
}

export default TrackForm

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 25,
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  inputContainer: {
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  inputInnerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  recordButton: {
    backgroundColor: '#000'
  },
  stopButton: {
    backgroundColor: '#e74c3c'
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    marginLeft: 5
  }
})