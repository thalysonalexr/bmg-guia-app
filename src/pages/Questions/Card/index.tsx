import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

import { QuestionOptions } from '../../../models/Dream';

interface Props {
  questionId: string;
  optionalAnswers: QuestionOptions[];
  fnGetAnswers: (id: string, correct: boolean) => void;
}

const Card: React.FC<Props> = ({
  questionId,
  optionalAnswers,
  fnGetAnswers,
}) => {
  const [checked, setChecked] = useState('');

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      {optionalAnswers.map(({ id, answer, correct }) => (
        <View key={id} style={styles.containerRadios}>
          <RadioButton
            value={id}
            theme={{ animation: { scale: 0 } }}
            color="#F48222"
            status={checked === id ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(id);
              fnGetAnswers(questionId, correct);
            }}
          />
          <Text style={[{ fontFamily: 'Comfortaa-Bold' }, styles.answer]}>
            {answer}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Card;
