import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, ImageBackground } from 'react-native';

import { Progress } from '../../models/Dream';

import styles from './styles';

interface Props {
  progress: Progress[];
}

const ProgressInvestment: React.FC<Props> = ({ progress }) => {
  const arrowProgressReached = require('../../../assets/arrow-progress-yellow.png');
  const arrowProgressWaiting = require('../../../assets/arrow-progress-grey.png');

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.containerProgress}>
      <ImageBackground
        source={require('../../../assets/arrow-progress-orange.png')}
        style={styles.progress}
      >
        <Text style={[styles.progressText, { fontFamily: 'Comfortaa-Bold' }]}>
          Meta
        </Text>
      </ImageBackground>
      {progress.map((p) =>
        p.state === 'REACHED' ? (
          <ImageBackground
            key={p.progress}
            source={arrowProgressReached}
            style={styles.progress}
          >
            <Text
              style={[styles.progressText, { fontFamily: 'Comfortaa-Bold' }]}
            >
              D{p.progress}
            </Text>
          </ImageBackground>
        ) : (
          <ImageBackground
            key={p.progress}
            source={arrowProgressWaiting}
            style={styles.progress}
          >
            <Text
              style={[styles.progressText, { fontFamily: 'Comfortaa-Bold' }]}
            >
              D{p.progress}
            </Text>
          </ImageBackground>
        )
      )}
    </View>
  );
};

export default ProgressInvestment;
