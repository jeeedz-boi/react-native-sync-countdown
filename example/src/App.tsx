import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { CountDown } from 'react-native-sync-countdown';

export default function App() {
  const countDown = CountDown;

  useEffect(() => {
    countDown.setTimer(6000);

    countDown.getTimer((timer) => {
      console.log('get timer every 1 sec', timer);
    });

    countDown.getTimerOnEnd(() => {
      console.log('timer end');
    });

    return () => countDown.resetTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
