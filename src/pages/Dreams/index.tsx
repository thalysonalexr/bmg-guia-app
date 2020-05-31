import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import AppLayout from '../../layouts/AppLayout';

import Card from './Card';

import styles from './styles';

import { Dream } from '../../models/Dream';
import { getAllDreamsService } from '../../services/api-core';

const Dreams: React.FC = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);

  async function handleLoadDreams() {
    const { dreams } = await getAllDreamsService();
    return dreams;
  }

  useEffect(() => {
    handleLoadDreams().then((response) => setDreams(response));
  }, []);

  return (
    <AppLayout>
      <View style={styles.container}>
        {dreams && (
          <FlatList
            data={dreams}
            style={styles.listDreams}
            keyExtractor={(dream: Dream) => dream.id}
            renderItem={({ item }) => <Card data={item} />}
          ></FlatList>
        )}
      </View>
    </AppLayout>
  );
};

export default Dreams;
