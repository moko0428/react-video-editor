import { useLayoutEffect, useState } from 'react';

const SMALL_SCREEN = 600;

const FULL_SCREEN = 1024;

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('full-screen');

  let screenWidth = window.innerWidth;

  const updateDeviceType = () => {
    screenWidth = window.innerWidth;

    if (screenWidth <= SMALL_SCREEN) {
      setDeviceType('small-screen');
    }
    if (screenWidth > SMALL_SCREEN && screenWidth <= FULL_SCREEN) {
      setDeviceType('medium-screen');
    }
    if (screenWidth > FULL_SCREEN) {
      setDeviceType('full-screen');
    }
  };

  useLayoutEffect(() => {
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};
export default useDeviceType;
