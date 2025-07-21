import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboarding from 'react-native-onboarding-swiper';

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>BulkBazaar</Text>
        <Onboarding
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('../../assets/adaptive-icon.png')} />,
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('../../assets/adaptive-icon.png')} />,
              title: 'Page 2',
              subtitle: 'This is page 2',
            },
                       {
              backgroundColor: '#fff',
              image: <Image source={require('../../assets/adaptive-icon.png')} />,
              title: 'Page 3',
              subtitle: 'This is page 3',
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
