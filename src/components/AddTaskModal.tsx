import React, {FC, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';
interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (taskContent: string) => void;
}
const AddTaskModal: FC<IModalProps> = ({isVisible, onClose, onAddTask}) => {
  const [taskInputValue, setTaskInputValue] = useState<string>();
  function handleAddTask() {
    if (taskInputValue) {
      onAddTask(taskInputValue);
    }
    setTaskInputValue('');
  }
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      onBackdropPress={onClose}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Görev Ekle</Text>
        <TextInput
          style={styles.input}
          placeholder="Görev..."
          placeholderTextColor="white"
          multiline={true}
          onChangeText={text => setTaskInputValue(text)}
          value={taskInputValue}></TextInput>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonPlaceHolder}>Ekle</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.defaultGreyColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '50%',
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    textAlign: 'center',
    fontSize: 18,
  },
  input: {
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 30,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: Colors.defaultBlueColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    width: 120,
    height: 40,
    marginLeft: 270,
  },
  buttonPlaceHolder: {
    color: Colors.default,
    WhiteColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 15,
  },
});

export default AddTaskModal;
