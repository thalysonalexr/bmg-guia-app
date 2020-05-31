import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native';

import styles from './styles';

interface Props {
  question: string;
}

const YesOrNot: React.FC<Props> = ({ question }) => {
  const [activeButtonYes, setActiveButtonYes] = useState(false);
  const [activeButtonNot, setActiveButtonNot] = useState(false);

  function toggleButtonYes() {
    setActiveButtonYes(true);
    setActiveButtonNot(false);
  }

  function toggleButtonNot() {
    setActiveButtonNot(true);
    setActiveButtonYes(false);
  }

  return (
    <View style={styles.containerQuestion}>
      <Text style={[styles.questionContent, { fontFamily: 'Comfortaa-Bold' }]}>
        {question}
      </Text>
      <View style={styles.containerInput}>
        <TouchableOpacity
          onPress={() => toggleButtonYes()}
          style={[
            styles.buttonYesOrNot,
            activeButtonYes ? styles.buttonActive : styles.buttonDisabled,
            { marginRight: '2%' },
          ]}
        >
          <Text
            style={[
              styles.buttonYesOrNotContent,
              { fontFamily: 'Comfortaa-Bold' },
            ]}
          >
            sim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleButtonNot()}
          style={[
            styles.buttonYesOrNot,
            activeButtonNot ? styles.buttonActive : styles.buttonDisabled,
          ]}
        >
          <Text
            style={[
              styles.buttonYesOrNotContent,
              { fontFamily: 'Comfortaa-Bold' },
            ]}
          >
            não
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YesOrNot;
