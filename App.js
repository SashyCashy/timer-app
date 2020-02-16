import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { newTimer } from './utils/TimerUtils';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import uuidv4 from 'uuid/v4';

export default function App() {
  const [intervalId, setIntervalId] = useState(null);
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn',
      project: 'House Chores',
      id: uuidv4(),
      elapsed: '0',
      isRunning: true
    },
    {
      id: uuidv4(),
      title: 'Bake the squash',
      project: 'Kitchen Chores',
      elapsed: '0',
      isRunning: true
    }
  ]);
  const onCreateFormSubmit = timer => {
    let foundRecord = {};
    let timerArray = Object.assign([], timers);
    if (timer.type == 'Update') {
      foundRecord = timerArray.find(tmr => timer.id == tmr.id);

      foundRecord.project = timer.project;
      foundRecord.title = timer.title;
      setTimers(timerArray);
    } else {
      setTimers([newTimer(timer), ...timers]);
    }
  };

  const onRemoveTimer = id => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  const onStartTimer = id => {
    let interval = setInterval(() => {
      let timerArray = Object.assign([], timers);
      let findTimer = timerArray.find(timer => timer.id === id);
      findTimer.elapsed = Number(findTimer.elapsed) + 1000;
      setTimers(timerArray);
    }, 1000);
    setIntervalId(interval);
  };

  const onStopTimer = () => {
    clearInterval(intervalId);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timer</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm
          onFormSubmit={timer => onCreateFormSubmit(timer)}
        />
        {timers.map(({ title, project, id, elapsed, isRunning }) => (
          <EditableTimer
            key={id}
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            onFormSubmit={timer => onCreateFormSubmit(timer)}
            onRemoveTimer={id => onRemoveTimer(id)}
            onStartTimer={id => onStartTimer(id)}
            onStopTimer={id => onStopTimer(id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15
  }
});
