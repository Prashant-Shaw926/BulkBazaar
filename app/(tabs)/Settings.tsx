import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
