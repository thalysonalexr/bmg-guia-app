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
        <View style={styles.containerTitle}>
          <Text style={[styles.title, { fontFamily: 'Comfortaa-Bold' }]}>
            Públicos
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
