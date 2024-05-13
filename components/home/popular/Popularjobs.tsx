import React from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useState } from 'react'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS,SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '@/hook/useFetch'
import { Button } from 'react-native-paper'

const Popularjobs = () => {
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
        <Text className="font-[DMMedium] text-[20px]">Popular Jobs</Text>
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
          <FlatList
            data={data}
            keyExtractor={(item) => item?.job_id}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
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

export default Popularjobs