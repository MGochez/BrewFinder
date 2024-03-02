import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native'

const LogoIconMini = () => {
  return (
    <View>
        <Image style={styles.iconMini}/>
    </View>
  )
}

 const styles = StyleSheet.create({
    iconMini: {
        height: '20px',
        width: '20px'
    }
 })


export default LogoIconMini