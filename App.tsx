import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import AddTaskModal from './src/components/AddTaskModal';
import FloatingButton from './src/components/FloatingButton';
import TaskCard from './src/components/TaskCard';
import Colors from './src/styles/Colors';
import Fonts from './src/styles/Fonts';
const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }
  function addTask(taskContent: string) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    if (taskContentCheck == '') {
      Alert.alert('Opps...', 'Please enter a valid task.');
    } else {
      if (checkDublicate) {
        Alert.alert('Opps...', 'You have already added this task. ');
      } else {
        const newTask = {
          id: toDoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setToDoList((oldTasks: any) => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }
  function deleteTask(task: any) {
    if (task.isCompleted == false) {
      const newList = toDoList.map((todo: any) => {
        if (todo.id == task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter((item: any) => item.id !== task.id));
    }
  }
  const renderToDoList = ({item}: any) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onDelete={() => deleteTask(item)}></TaskCard>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Görev Listesi</Text>
      <Text style={styles.line}></Text>
      <FlatList data={toDoList} renderItem={renderToDoList}></FlatList>
      <FloatingButton onPress={handleModalVisible}></FloatingButton>
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}></AddTaskModal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.default,
    WhiteColor,
    flex: 1,
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 100,
    //  marginBottom: 50,
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    //   borderBottomWidthColor: '#ccc',
  },
});
export default App;
