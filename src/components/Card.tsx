import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MyTheme } from '../../theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  title?: string;
  content: string;
}

export default function Card({ title, content }: Props) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3,
    backgroundColor: MyTheme.colors.white,
    margin: 5,
    width: wp('90%'),
  },
  title: {
    color: MyTheme.colors.text,
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-start'
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
    color: MyTheme.colors.text,
    paddingTop: 5,
    alignSelf: 'flex-start'
  },
});
