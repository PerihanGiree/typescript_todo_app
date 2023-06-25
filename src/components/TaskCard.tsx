import React, {FC} from 'react';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
interface ICardProps {
  isCompleted: boolean;
  item: any;
  onDelete: () => void;
}
const TaskCard: FC<ICardProps> = ({isCompleted, item, onDelete}) => {
  return isCompleted ? (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedTaskText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.container}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
};
const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  taskText: {
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 17,
  },
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultBlueColor,
    ...baseStyle.container,
  },
  taskText: {
    color: Colors.default,
    WhiteColor,
    ...baseStyle.taskText,
  },
  completedContainer: {
    ...baseStyle.container,
    backgroundColor: Colors.defaultGreyColor,
  },
  completedTaskText: {
    ...baseStyle.taskText,
    color: 'white',
    textDecorationLine: 'line-through',
  },
});
export default TaskCard;
