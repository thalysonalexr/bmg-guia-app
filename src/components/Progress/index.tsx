import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';

import { Progress } from '../../models/Dream';

import styles, { fullSize } from './styles';

interface Props {
  progress: Progress[];
  imageWating: ImageSourcePropType;
  imageReached: ImageSourcePropType;
  colorText: string;
  size: 'SMALL' | 'LARGE';
  labeled?: boolean;
}

const ProgressInvestment: React.FC<Props> = ({
  size,
  labeled,
  colorText,
  progress,
  imageWating,
  imageReached,
}) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  const SMALL = {
    width: Dimensions.get('window').width > fullSize ? 40 : 30,
    maxWidth: 50,
    height: 20,
  };

  const LARGE = {
    width: Dimensions.get('window').width > fullSize ? 61 : 51,
    maxWidth: 75,
    height: 35,
  };

  function selectArrowImage(state: 'REACHED' | 'WAITING') {
    switch (state) {
      case 'REACHED':
        return imageReached;
      case 'WAITING':
        return imageWating;
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.containerProgress}>
      {labeled && (
        <ImageBackground
          source={require('../../../assets/arrow-progress-orange.png')}
          style={[styles.progress, size === 'LARGE' ? LARGE : SMALL]}
        >
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
              color: '#FCFCFC',
              fontSize: size === 'LARGE' ? 10 : 8,
            }}
          >
            Meta
          </Text>
        </ImageBackground>
      )}
      {progress.map(({ progress, state }, index) => (
        <ImageBackground
          key={index}
          source={selectArrowImage(state)}
          style={[styles.progress, size === 'LARGE' ? LARGE : SMALL]}
        >
          <Text
            style={{
              fontFamily: 'Comfortaa-Bold',
              color: state === 'REACHED' ? '#FCFCFC' : colorText,
              fontSize: size === 'LARGE' ? 10 : 8,
            }}
          >
            {progress}
          </Text>
        </ImageBackground>
      ))}
    </View>
  );
};

export default ProgressInvestment;
