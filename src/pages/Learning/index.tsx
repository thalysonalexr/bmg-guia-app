import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import AppLayout from '../../layouts/AppLayout';

import Header from './Header';

import { Content, Questions, Progress } from '../../models/Dream';

import styles from './styles';

interface Props {
  content: Content[];
  questions: Questions[];
  progress: Progress[];
}

const Learning: React.FC = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const contents = (params as Props).content;
  const questions = (params as Props).questions;
  const progress = (params as Props).progress[0].progress;

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-Regular': require('../../../assets/fonts/Comfortaa-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <Header progress={progress} />
      <ScrollView>
        <View style={styles.container}>
          {contents.map(({ title, content }, index) => (
            <View style={styles.card} key={index}>
              <Text style={[styles.title, { fontFamily: 'Comfortaa-Bold' }]}>
                {title}
              </Text>
              <Text
                style={[styles.content, { fontFamily: 'Comfortaa-Regular' }]}
              >
                {content}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.buttonQuestions}
          onPress={() => navigate('Questions', { questions, progress })}
        >
          <Text
            style={[
              styles.buttonQuestionsContent,
              { fontFamily: 'Comfortaa-Bold' },
            ]}
          >
            Responder questionário
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </AppLayout>
  );
};

export default Learning;
