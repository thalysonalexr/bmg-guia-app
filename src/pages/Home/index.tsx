import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import AppLayout from '../../layouts/AppLayout';

import YesOrNot from './YesOrNot';

import styles from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <ScrollView>
        <Text style={[styles.title, { fontFamily: 'Comfortaa-Bold' }]}>
          Sobre a sua vontade de investir?
        </Text>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/gui-home.png')}
            style={styles.mascot}
          />
          <YesOrNot question="• Você sabe o quanto gasta?" />
          <YesOrNot question="• Seus gastos consomem todo o seu dinheiro antes do fim do mês?" />
          <Text
            style={[{ fontFamily: 'Comfortaa-Bold' }, styles.questionContent]}
          >
            • Qual foi o maior valor que já conseguiu investir?
          </Text>
          <TextInput
            style={styles.textInput}
            mode="flat"
            placeholder="R$"
            underlineColor="#F48222"
            underlineColorAndroid="#F48222"
            selectionColor="#F48222"
            keyboardType="numeric"
          />
          <YesOrNot question="• Você possui dívidas?" />
          <Text
            style={[{ fontFamily: 'Comfortaa-Bold' }, styles.questionContent]}
          >
            • Se sim, informe o valor total das suas dívudas:
          </Text>
          <TextInput
            style={styles.textInput}
            mode="flat"
            placeholder="R$"
            underlineColor="#F48222"
            underlineColorAndroid="#F48222"
            selectionColor="#F48222"
            keyboardType="numeric"
          />
          <View style={styles.containerNavigation}>
            <TouchableOpacity
              style={[{ marginRight: '2%' }, styles.buttonNavigation]}
              onPress={() => navigate('Dreams')}
            >
              <Text
                style={[
                  { fontFamily: 'Comfortaa-Bold' },
                  styles.buttonNavigationContent,
                ]}
              >
                Guia investe
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonNavigation}
              onPress={() => navigate('Analyze')}
            >
              <Text
                style={[
                  { fontFamily: 'Comfortaa-Bold' },
                  styles.buttonNavigationContent,
                ]}
              >
                Guia gestão
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

export default Home;
