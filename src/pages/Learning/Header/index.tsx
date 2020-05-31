import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

interface Props {
  progress: string;
}

const Header: React.FC<Props> = ({ progress }) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.header}>
      <View style={styles.arrowContainer}>
        <ImageBackground
          source={require('../../../../assets/arrow-progress-green.png')}
          imageStyle={{
            resizeMode: 'contain',
          }}
          style={styles.arrow}
        >
          <Text style={[styles.arrowContent, { fontFamily: 'Comfortaa-Bold' }]}>
            {progress}
          </Text>
        </ImageBackground>
      </View>
      <ImageBackground
        source={require('../../../../assets/cloud.png')}
        imageStyle={{
          resizeMode: 'contain',
          height: 82,
        }}
        style={styles.cloud}
      >
        <Text style={[styles.cloudContent, { fontFamily: 'Comfortaa-Bold' }]}>
          Seu sonho possui este investimento!
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Header;
