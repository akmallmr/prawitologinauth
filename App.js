import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text> App Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})
export default App;
