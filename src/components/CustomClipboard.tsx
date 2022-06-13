import {
  View,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Button from './Button';
import * as Clipboard from 'expo-clipboard';
import Card from './Card';

interface Props {
  code: string;
  codeType: string;
}

export default function CustomClipboard({ code, codeType }: Props) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
    ToastAndroid.show('Copiado para área de transferência', ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <Card title={'Tipo do código'} content={codeType} />
      <Card title={'Código'} content={code} />
      <Button title="Copiar" onPress={copyToClipboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 6,
    borderColor: '#666'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});