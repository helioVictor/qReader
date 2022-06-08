import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import { MyTheme } from './theme';

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.container}>
        <Home />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
