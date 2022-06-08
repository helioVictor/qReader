import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from './Button';
import * as Clipboard from 'expo-clipboard';

interface Props {
    content: string;
}

export default function CustomClipboard({ content }: Props) {
    const [copiedText, setCopiedText] = useState('');

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(content);
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
        alert(copiedText)
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>{content}</Text>
            </View>
            <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
            <Button title="View copied text" onPress={fetchCopiedText} />
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
      marginTop: 60
  }
});