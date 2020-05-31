import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../../assets/background.png')}
    >
      {children}
    </ImageBackground>
  );
};

export default AppLayout;
