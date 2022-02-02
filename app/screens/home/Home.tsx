import React from 'react';
import {StyleSheet, View} from 'react-native';

import {TextInput} from '../../components';

const Home: React.FC = () => {
  const handleChange = () => {};
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'Add todo..'}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'lightblue',
  },
});

export default Home;
