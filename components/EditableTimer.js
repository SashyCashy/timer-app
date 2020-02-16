import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemoveTimer,
  onStartTimer,
  onStopTimer
}) => {
  const [editFormState, setEditFormState] = useState(false);
  if (editFormState) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormClose={() => setEditFormState(false)}
        onFormSubmit={timer => {
          onFormSubmit(timer);
          setEditFormState(false);
        }}
      />
    );
  }
  return (
    <Timer
      id={id}
      title={title}
      elapsed={elapsed}
      project={project}
      isRunning={isRunning}
      onEditPress={() => {
        setEditFormState(true);
      }}
      onRemovePress={timer => {
        onRemoveTimer(timer);
        setEditFormState(false);
      }}
      onStartPress={id => {
        onStartTimer(id);
      }}
      onStopPress={id => {
        onStopTimer(id);
      }}
    />
  );
};

export default EditableTimer;
