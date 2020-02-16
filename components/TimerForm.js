import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import TimerButton from './TimerButton';

const TimerForm = ({ id, title, project, onFormClose, onFormSubmit }) => {
  const submitText = id ? 'Update' : 'Create';
  const [projectChange, setProjectChange] = useState(project);
  const [titleChange, setTitleChange] = useState(title);

  useEffect(() => {
    setProjectChange(project);
    setTitleChange(title);
  }, [title, project]);
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={titleChange}
            onChangeText={text => setTitleChange(text)}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={projectChange}
            onChangeText={text => setProjectChange(text)}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={() =>
            onFormSubmit({
              type: submitText,
              id,
              title: titleChange,
              project: projectChange
            })
          }
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  attributeContainer: {
    marginVertical: 8
  },
  textInputContainer: {
    marginVertical: 8
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default TimerForm;
