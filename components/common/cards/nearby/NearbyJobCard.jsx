import React from 'react'
import { View, Text } from 'react-native'
import { router } from 'expo-router'
import styles from './nearbyjobcard.style'
import { TouchableOpacity } from 'react-native-web'
import {checkImageURL} from '../../../../utils/index'
const NearbyJobCard = ({job}) => {


  const handleCardPress=()=>{
    
    
  }
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={()=>handleCardPress(item)}

    >
      <TouchableOpacity>
        <Image
        source={{url:checkImageURL(job.employer_logo)
          ?job.employer_logo
          :'https:t4.ftcdn.net/jpg/05/05/61/73/360_f_5005'
        
        }}
        resizeMode="contain"
        style={styles.logoImage}
        
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}> 
        {job.job_title}

        </Text>
<Text style={styles.jobType}>
{job.job_employment_type}
</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard