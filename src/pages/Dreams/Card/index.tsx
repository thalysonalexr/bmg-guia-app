import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import Progress from '../../../components/Progress';

import { Dream } from '../../../models/Dream';

import styles, { fullSize } from './styles';

const Card: React.FC<{ data: Dream }> = ({
  data: { id, name, challenge, investment, progress },
}) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../../assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-Light': require('../../../../assets/fonts/Comfortaa-Light.ttf'),
  });

  const navigation = useNavigation();

  function navigationToTopics(id: string) {
    navigation.navigate('Topics', { id });
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <ImageBackground
          source={require('../../../../assets/thinking.png')}
          fadeDuration={1000}
          imageStyle={{
            resizeMode: 'contain',
            maxHeight: Dimensions.get('window').width > fullSize ? 240 : 215,
          }}
          style={styles.containerMascot}
        >
          <Text style={styles.dreamText}>{name}</Text>
        </ImageBackground>
        <View style={styles.containerInfo}>
          <TouchableOpacity
            style={styles.buttonLearn}
            onPress={() => navigationToTopics(id)}
          >
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
            <Text
              style={[styles.challengeTitle, { fontFamily: 'Comfortaa-Bold' }]}
            >
              Desafio da semana
            </Text>
            <Text
              style={[
                styles.challengeDescription,
                { fontFamily: 'Comfortaa-Light' },
              ]}
            >
              {challenge}
            </Text>
          </View>
          <View style={styles.containerInvestment}>
            <Text
              style={[
                styles.investmentDescription,
                { fontFamily: 'Comfortaa-Bold' },
              ]}
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
      <Progress
        size="LARGE"
        labeled={true}
        colorText="#FCFCFC"
        progress={progress}
        imageWating={require('../../../../assets/arrow-progress-grey.png')}
        imageReached={require('../../../../assets/arrow-progress-yellow.png')}
      />
    </View>
  );
};

export default Card;
