import React, { useState, useEffect } from 'react';

import { View, ImageBackground, FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import DreamCard from '../../components/DreamCard';

import styles from './styles';

import { Dream } from '../../models/Dream';
import { getAllDreamsService } from '../../services/api-core';

const Home: React.FC = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    async function handleLoadDreams() {
      const { dreams } = await getAllDreamsService();
      return dreams;
    }

    handleLoadDreams().then((response) => setDreams(response));
  });

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <FlatList
          data={dreams}
          style={styles.listDreams}
          keyExtractor={(dream: Dream) => dream.id}
          renderItem={({ item }) => <DreamCard data={item} />}
        ></FlatList>
      </View>
    </ImageBackground>
  );
};

export default Home;
