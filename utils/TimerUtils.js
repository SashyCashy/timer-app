import uuidv4 from 'uuid/v4';

export const milliSecondsToHuman = duration => {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
};

export const newTimer = (attrs = {}) => {
  return {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuidv4(),
    elapsed: 0,
    isRunning: false
  };
};
