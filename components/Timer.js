import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerButton from './TimerButton';

import { milliSecondsToHuman } from '../utils/TimerUtils';

export default function Timer({
  id,
  title,
  project,
  elapsed,
  onEditPress,
  onRemovePress,
  onStartPress,
  onStopPress
}) {
  let elapsedString = milliSecondsToHuman(elapsed);
  const [isRunning, setIsRunning] = useState(false);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
        <TimerButton
          color="blue"
          small
          title="Remove"
          onPress={() => onRemovePress(id)}
        />
      </View>
      {isRunning ? (
        <TimerButton
          color="#21BA45"
          small
          title="Stop"
          onPress={() => {
            setIsRunning(false);
            onStopPress(id);
          }}
        />
      ) : (
        <TimerButton
          color="#21BA45"
          small
          title="Start"
          onPress={() => {
            setIsRunning(true);
            onStartPress(id);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
