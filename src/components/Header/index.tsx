import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useAuth } from '../../contexts/auth';

import styles from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();
  const { goBack, canGoBack } = useNavigation();

  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('../../../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    user && (
      <View style={styles.header}>
        <View style={styles.info}>
          <Image style={styles.avatar} source={{ uri: user.avatar }} />
          <Text
            style={{
              lineHeight: 20,
              color: '#fcfcfc',
              fontFamily: 'Comfortaa-Bold',
            }}
          >
            <Text style={styles.name}>
              {user.name}
              {'\n'}
            </Text>
            <Text style={styles.account}>
              ag {user.agency} c/c {user.account}
            </Text>
          </Text>
        </View>
        <View>
          {canGoBack() && (
            <TouchableOpacity onPress={() => goBack()}>
              <Image
                style={[styles.buttonPrevious, { resizeMode: 'stretch' }]}
                source={require('../../../assets/previous.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  );
};

export default Header;
