import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import AppLayout from '../../layouts/AppLayout';

import Progress from '../../components/Progress';

import styles from './styles';

import { getTopicById } from '../../services/api-core';
import { Topics } from '../../models/Dream';

interface RouteParams {
  id: string;
}

const Subtopics: React.FC = () => {
  const [topic, setTopic] = useState<Topics | undefined>(undefined);
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  async function handleLoadTopicById(id: string) {
    const topic = await getTopicById(id);
    return topic;
  }

  useEffect(() => {
    handleLoadTopicById((params as RouteParams).id).then((response) =>
      setTopic(response)
    );
  }, []);

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <AppLayout>
      {topic && (
        <View style={styles.container}>
          <ImageBackground
            source={require('../../../assets/thinking-2.png')}
            fadeDuration={1000}
            imageStyle={{
              resizeMode: 'contain',
              height: 110,
            }}
            style={styles.mascot}
          >
            <Text
              style={[styles.mascotMessage, { fontFamily: 'Comfortaa-Bold' }]}
            >
              {topic.content.message}
            </Text>
          </ImageBackground>
          <View style={styles.containerSubtopics}>
            {topic.content.subtopics.map(
              ({ id, title, progress, content, questions }) => (
                <TouchableOpacity
                  style={styles.subtopics}
                  key={id}
                  onPress={() =>
                    navigate('Learning', { content, questions, progress })
                  }
                >
                  <Text
                    style={{
                      fontFamily: 'Comfortaa-Bold',
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#fcfcfc',
                    }}
                  >
                    {title}
                  </Text>
                  <Progress
                    key={id}
                    size="SMALL"
                    colorText="#56F078"
                    progress={progress}
                    imageReached={require('../../../assets/arrow-progress-green.png')}
                    imageWating={require('../../../assets/arrow-progress-green-bordered.png')}
                  />
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      )}
    </AppLayout>
  );
};

export default Subtopics;
