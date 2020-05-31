import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import AppLayout from '../../layouts/AppLayout';

import styles from './styles';

interface Props {
  percentageHits: number;
  percentageErrors: number;
  progress: string;
}

const Result: React.FC = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const progress = (params as Props).progress;
  const percentageHits = (params as Props).percentageHits;
  const percentageErrors = (params as Props).percentageErrors;

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  function selectMascotExpression() {
    if (percentageHits >= 60) {
      return require('../../../assets/good-result.png');
    }

    return require('../../../assets/bad-result.png');
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <Text style={[styles.title, { fontFamily: 'Comfortaa-Bold' }]}>
        Resultados
      </Text>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerResult}>
            <View style={styles.inline}>
              <View style={styles.result}>
                <Text
                  style={[styles.textContent, { fontFamily: 'Comfortaa-Bold' }]}
                >
                  Acertos
                </Text>
                <Text
                  style={[styles.textContent, { fontFamily: 'Comfortaa-Bold' }]}
                >
                  {percentageHits % 1 === 0
                    ? percentageHits
                    : percentageHits.toFixed(1)}
                  %
                </Text>
              </View>
              <View style={styles.result}>
                <Text
                  style={[styles.textContent, { fontFamily: 'Comfortaa-Bold' }]}
                >
                  Erros
                </Text>
                <Text
                  style={[styles.textContent, { fontFamily: 'Comfortaa-Bold' }]}
                >
                  {percentageErrors % 1 === 0
                    ? percentageErrors
                    : percentageErrors.toFixed(1)}
                  %
                </Text>
              </View>
            </View>
            <View style={styles.containerDiffilcuty}>
              <Text
                style={[
                  styles.textContent,
                  styles.textDifficulty,
                  { fontFamily: 'Comfortaa-Bold' },
                ]}
              >
                Dificuldade: {progress}
              </Text>
            </View>
          </View>
          <View style={styles.containerMascot}>
            <Image source={selectMascotExpression()} style={styles.mascot} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonQuit}
          onPress={() => navigate('Topics')}
        >
          <Text
            style={[styles.buttonQuitContent, { fontFamily: 'Comfortaa-Bold' }]}
          >
            Sair do aprendizado
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </AppLayout>
  );
};

export default Result;
