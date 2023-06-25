import React, {FC} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
export interface IButtonProps {
  onPress: () => void;
}

const FloatingButton: FC<IButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.defaultBlueColor,
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    bottom: 15,
  },
  icon: {
    fontSize: 35,
    color: Colors.default,
    WhiteColor,
  },
});
export default FloatingButton;
