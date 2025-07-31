import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      route.replace('/HomeScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center">
        <View className="flex-1 items-center justify-center">
          <Image className="h-40 w-40" source={require('../assets/appLogo.png')} />
        </View>
      </SafeAreaView>
    );
  }
};

export default Index;
