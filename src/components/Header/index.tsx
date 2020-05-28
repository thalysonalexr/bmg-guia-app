import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useAuth } from '../../contexts/auth';

import styles from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.avatar} source={{ uri: user?.avatar }} />
      </View>
      <View style={styles.info}>
        <Text
          style={{
            fontFamily: 'Comfortaa-Bold',
            color: '#fcfcfc',
            lineHeight: 20,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {user?.name}
            {'\n'}
          </Text>
          <Text style={{ fontSize: 12 }}>
            ag {user?.agency} c/c {user?.account}
          </Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={[styles.buttonPrevious, { resizeMode: 'stretch' }]}
            source={require('../../../assets/previous.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
