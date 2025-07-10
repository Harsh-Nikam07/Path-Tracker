import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const NavLink = ( {navigation, text, routeName} ) => {
  return (
    <>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={{ color: 'blue' }}>{text}</Text>
            </TouchableOpacity>
    </>
  )
}

export default NavLink

const styles = StyleSheet.create({})