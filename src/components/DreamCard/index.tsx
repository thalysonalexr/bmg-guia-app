import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import ProgressInvestment from '../ProgressInvestment';

import { Dream } from '../../models/Dream';

import styles from './styles';

const DreamCard: React.FC<{ data: Dream }> = ({
  data: { name, challenge, investment, progress },
}) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <ImageBackground
          source={require('../../../assets/thinking.png')}
          fadeDuration={1000}
          imageStyle={{ resizeMode: 'stretch', maxHeight: 215 }}
          style={styles.containerMascot}
        >
          <Text style={styles.dreamText}>{name}</Text>
        </ImageBackground>
        <View style={styles.containerInfo}>
          <TouchableOpacity style={styles.buttonLearn} onPress={() => {}}>
            <Text
              style={[
                styles.buttonLearnContent,
                { fontFamily: 'Comfortaa-Bold' },
              ]}
            >
              Aprenda
            </Text>
          </TouchableOpacity>
          <View style={styles.containerChallenge}>
            <Text style={{ fontFamily: 'Comfortaa-Bold', textAlign: 'center' }}>
              Desafio da semana
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
                textAlign: 'center',
                fontSize: 12,
              }}
            >
              {challenge}
            </Text>
          </View>
          <View style={styles.containerInvestment}>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
                textAlign: 'center',
                color: '#fcfcfc',
                fontSize: 12,
              }}
            >
              <Text>
                Total Investido: R${' '}
                {investment.total.toFixed(2).replace('.', ',')}
                {'\n'}
              </Text>
              <Text>
                Título: {investment.title}
                {'\n'}
              </Text>
              <Text>Tempo para retirada: {investment.time} dias</Text>
            </Text>
          </View>
        </View>
      </View>
      <ProgressInvestment progress={progress} />
    </View>
  );
};

export default DreamCard;
