import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, ScrollView, Image } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import AppLayout from '../../layouts/AppLayout';

import styles from './styles';

const Analyze: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-Regular': require('../../../assets/fonts/Comfortaa-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <ScrollView>
        <Title style={[styles.title, { fontFamily: 'Comfortaa-Bold' }]}>
          Como fazer durar e ainda poder guardar dinheiro?
        </Title>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image
              source={require('../../../assets/gui-analyze.png')}
              style={styles.mascot}
            />
          </View>
          <View style={styles.card}>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.subtitle]}
            >
              Divida seus gastos e objetivos mensais:
            </Paragraph>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.paragraph]}
            >
              - 55% para o que é essencial
            </Paragraph>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.paragraph]}
            >
              - 10% para aposentadoria
            </Paragraph>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.paragraph]}
            >
              - 05% para educação - livros, cursos, maior erro.
            </Paragraph>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.paragraph]}
            >
              - 20% para objetivos de média e longo prazo - viagem/abrir um
              negócio
            </Paragraph>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Regular' }, styles.paragraph]}
            >
              - 10% pra gastar com o que você quiser
            </Paragraph>
          </View>
          <View style={[styles.card]}>
            <Paragraph
              style={[{ fontFamily: 'Comfortaa-Bold' }, styles.message]}
            >
              Não se prive dos lazeres, é importante saber qual o prazer te
              motiva e qual apenas leva seu dinheiro embora!
            </Paragraph>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default Analyze;
