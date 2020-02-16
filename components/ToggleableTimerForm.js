import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm({ id, onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          id={id}
          onFormClose={() => setIsOpen(false)}
          onFormSubmit={timer => {
            setIsOpen(false);
            onFormSubmit(timer);
          }}
        />
      ) : (
        <TimerButton title="+" color="black" onPress={() => setIsOpen(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});
