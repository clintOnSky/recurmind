import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";

type Props = TextInputProps;

const CustomInput = (props: Props) => {
  return (
    <View>
      <TextInput />
    </View>
  );
};

export default CustomInput;
