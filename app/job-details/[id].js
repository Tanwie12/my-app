import { View, Text, RefreshControl } from 'react-native'
import React from 'react'
import {Stack, useRouter, useSearchParams} from 'expo-router'
import { useCallback,useState } from 'react'
import { Company,JobAbout,JobFooter,JobTabs,ScreenHeaderBtn,Specifics } from '../../components'
import {useFetch} from '../../hook/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../constants'
import { ScrollView } from 'react-native-web'
import { ActivityIndicator } from 'react-native-paper'
export default function JobDetails() {
    const params=useSearchParams()
    const router=useRouter()
    const {data,isLoading,error,refetch}=useFetch('job-details',{
        job_id:params.id
    })

    const [refreshing,setrefreshing]=useState(false)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
<Stack.Screen
options={{
    headerStyle:{backgroundColor:COLORS.lightWhite},
    headerShadowVisible:false,
    headerBackVisible:false,
    headerLeft:()=>(
        <ScreenHeaderBtn
        iconUrl={icons.left}
        dimension={"60%"}
        
        />
    ),
    headerRight:()=>(
        <ScreenHeaderBtn
        iconUrl={icons.share}
        dimension={"60%"}
        
        />
  ),
  headerTitle:'Job Details'

}}

/>
    
<>
<ScrollView showsVerticalScrollIndicator={false} refreshControl= {
        <RefreshControl refreshing={refreshing} onRefresh={inRefresh}/>
    } >
   {isLoading ? (
    <ActivityIndicator size="large" color={COLORS.primary}/>
   ):error ? (
    <Text>
        Something went wrong
    </Text>

   ):data.length===0 ? (
    <Text>No Data</Text>
   ):(

    <View>
        <Company/>
        <JobTabs/>
    </View>
   )
    
   
   }
</ScrollView>
</>
    </SafeAreaView>
  )
}