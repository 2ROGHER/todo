// This hook allows us to toggle between two
// options eg. true or false.
import { useRef, useState } from 'react';

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const updateValue = useRef({
    toggle: () => setValue((oldValue) => !oldValue),
  });
  return [value, updateValue.current.toggle];
};

export default useToggle;
