import React, {useState} from 'react';
import {TouchableOpacity, Text, View, TextInput, FlatList} from 'react-native';

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const PressButton = () => {
    if (fname) {
      let todoClone = [...todoList];
      todoClone.push({
        firstname: fname,
        lastname: lname,
      });
      setTodoList(todoClone);
      setFname('');
      setLname('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={{margin: 20}}>
        <TextInput
          placeholder={'Enter First Name'}
          onChange={setFname}
          value={fname}
          style={{borderWidth: 0.5, borderRadius: 10, paddingLeft: 10}}
        />

        <TextInput
          placeholder={'Enter Last Name'}
          onChange={setLname}
          value={lname}
          style={{
            borderWidth: 0.5,
            marginTop: 10,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        />
      </View>

      <TouchableOpacity onPress={PressButton}>
        <View
          style={{
            alignItems: 'center',
            padding: 13,
            marginTop: -10,
            marginHorizontal: 20,
            borderRadius: 10,
            backgroundColor: '#20b2aa',
          }}>
          <Text style={{color: 'white'}}>{'Add Task'}</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={todoList}
        keyExtractor={item => item}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
        }}
        renderItem={({item}) => {
          return (
            <View
              style={{
                paddingVertical: 10,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{marginRight: 10}}>{item.firstname}</Text>
              <Text style={{marginRight: 10}}>{item.lastname}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ToDoApp;
