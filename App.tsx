import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { MyTheme } from './theme';
import Home from './src/pages/Home';
import { StatusBar } from 'react-native';

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
    marginTop: StatusBar.currentHeight
  },
});