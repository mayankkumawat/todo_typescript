import React from 'react';
import {StyleSheet, TextInput as CustomTextInput} from 'react-native';

interface Props {
  style: any;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<Props> = ({style, placeholder, onChangeText}) => {
  return (
    <CustomTextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 41,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default TextInput;
