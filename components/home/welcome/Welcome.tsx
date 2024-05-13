import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './welcome.style'

import { router } from 'expo-router'
import { SIZES } from '../../../constants'
import { Searchbar } from 'react-native-paper'

const Welcome = () => {
  const Jobtypes=['Full Time','Part Time','Freelance','Internship'];
  const [searchQuery, setSearchQuery] = React.useState('');
  const[activeJobType,setactiveJobType]=useState("fultime")
  return (
    <View>
      <View className="container font-[DMRegular]">
        <Text className=" h4 font-[DMRegular] text-lg">Hello Adrian</Text>
        <Text className=" font-DMBOLD text-[20px] my-3">Find Your Perfect Job</Text>
      </View>
      <View>
      <Searchbar
      
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
       
      </View>
      <View style={styles.tabContainer} className="my-5">
      <FlatList
        data={Jobtypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>
          {setactiveJobType(item);
          
            router.push(`/search/${item}`)}
          }
            >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal

        />
      </View>
      
    </View>
  )
}

export default Welcome
