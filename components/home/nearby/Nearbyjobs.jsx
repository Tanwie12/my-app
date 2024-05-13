import React from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'


import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS,SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '@/hook/useFetch'
import { Button } from 'react-native-paper'

const NearbyJobs = () => {
  const router = useRouter();
  const endpoint = "search";
  const query = {
    query: "React developer",
    num_pages: 1,
  };

  const { data, isLoading, error, refetch } = useFetch({ endpoint, query });

  return (
    <View className="container">
      <View className="flex flex-row justify-between items-center mb-5">
        <Text className="font-[DMMedium] text-[20px]">NearBy Jobs</Text>
        <TouchableOpacity>
          <Text className="DMRegular text-[15px]">Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map(()=>(
            <NearbyJobcard
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={()=>router.push('/job-details')}
            
            />
          ))
        )}
        <Button
          mode="contained"
          onPress={() => {
            refetch();
          }}
        >
          refetch
        </Button>
      </View>
    </View>
  );
};

export default NearbyJobs