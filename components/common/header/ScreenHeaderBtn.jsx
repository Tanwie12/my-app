import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { Ico, IconButton, } from 'react-native-paper';
import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const handlePress = () => {
    console.log("pressed")
  }



  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} style={styles.btnImg(dimension)} resizeMode="cover" />
    </TouchableOpacity>




 


  )


}

export default ScreenHeaderBtn
