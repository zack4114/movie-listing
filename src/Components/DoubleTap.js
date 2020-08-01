import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const DoubleTappable = (props) => {
  const {children, delay = 300, onDoubleTap = () => {}} = props;
  let lastTap = null;
  const handleDoubleTap = () => {
    Keyboard.dismiss();
    const now = Date.now();
    if (lastTap && now - lastTap < delay) {
      onDoubleTap();
    } else {
      lastTap = now;
    }
  };
  return (
    <TouchableWithoutFeedback {...props} onPress={handleDoubleTap}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DoubleTappable;
