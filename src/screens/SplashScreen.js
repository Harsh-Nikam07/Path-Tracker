import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

const SplashScreen = () => {

    const {tryLocalSignIn} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignIn();
    },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Path Tracker</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
})