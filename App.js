import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules } from 'react-native';

const CalendarManager = NativeModules.CalendarManager;

export default class App extends React.Component {

  componentDidMount () {
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
