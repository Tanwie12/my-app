import { SafeAreaView, Text,ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import {Stack, useRouter} from 'expo-router'


import {COLORS,icons,images,SIZES} from '../constants'
import{Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

export default function Home() {
  console.log(process.env.API_URL); // 'https://api.example.com'
console.log(process.env.API_KEY); // 'your_api_key'

  const router = useRouter()
  return (
    <SafeAreaView className={`flex-1 m-2`} style={{backgroundColor:COLORS.lightWhite}} >
    <Stack.Screen
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>(
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        ),
        headerRight:()=>(
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
        ),
        headerTitle:""
      }}
    
    />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Welcome/>
      <Popularjobs/>
      <Nearbyjobs/>
    </ScrollView>
    
    
    </SafeAreaView>
  )
}  