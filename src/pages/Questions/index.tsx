import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import AppLayout from '../../layouts/AppLayout';

import Card from './Card';
import Header from './Header';

import { Questions as QuestionsInterface } from '../../models/Dream';

import styles from './styles';

interface Props {
  progress: string;
  questions: QuestionsInterface[];
}

interface Answer {
  questionId: string;
  correct: boolean;
}

const Questions: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { params } = useRoute();
  const { navigate } = useNavigation();

  const progress = (params as Props).progress;
  const questions = (params as Props).questions;

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  function fnGetAnswers(id: string, correct: boolean) {
    const data = answers.filter(({ questionId }) => questionId !== id);
    setAnswers([...data, { questionId: id, correct }]);
  }

  function checkAnswers() {
    const total = answers.length;
    const hits = answers.filter(({ correct }) => correct).length;

    const percentageHits = (hits / total) * 100;
    const percentageErrors = ((total - hits) / total) * 100;

    navigate('Result', { percentageHits, percentageErrors, progress });
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      <Header progress={progress} />
      <ScrollView>
        {questions && (
          <View style={styles.container}>
            {questions.map(({ id, options, question }, index) => (
              <View
                key={id}
                style={[
                  styles.card,
                  {
                    marginTop: index === 0 ? 0 : 10,
                    borderBottomWidth: index === questions.length - 1 ? 0 : 1,
                  },
                ]}
              >
                <Text style={[{ fontFamily: 'Comfortaa-Bold' }, styles.title]}>
                  {question}
                </Text>
                <Card
                  questionId={id}
                  fnGetAnswers={fnGetAnswers}
                  optionalAnswers={options}
                />
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => checkAnswers()}
        >
          <Text
            style={[
              styles.buttonConfirmContent,
              { fontFamily: 'Comfortaa-Bold' },
            ]}
          >
            Confirmar respostas
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </AppLayout>
  );
};

export default Questions;
