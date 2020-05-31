import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import AppLayout from '../../layouts/AppLayout';

import styles from './styles';

import { getAllTopicsByDreamId } from '../../services/api-core';
import { Topics as TopicsInterface } from '../../models/Dream';

interface RouteParams {
  id: string;
}

const Topics: React.FC = () => {
  const [topics, setTopics] = useState<TopicsInterface[] | undefined>();
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  async function handleLoadTopics() {
    const topics = await getAllTopicsByDreamId((params as RouteParams).id);
    return topics;
  }

  useEffect(() => {
    handleLoadTopics().then((response) => setTopics(response));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppLayout>
      {topics && (
        <View style={styles.container}>
          <View style={styles.containerTopics}>
            {topics.map(({ id, title }) => (
              <TouchableOpacity
                key={id}
                style={styles.topics}
                onPress={() => navigate('Subtopics', { id })}
              >
                <Text
                  style={{
                    fontFamily: 'Comfortaa-Bold',
                    fontSize: 13,
                    textAlign: 'center',
                    color: '#fcfcfc',
                  }}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Image
            source={require('../../../assets/gui.png')}
            fadeDuration={1000}
            style={styles.mascot}
          />
        </View>
      )}
    </AppLayout>
  );
};

export default Topics;
