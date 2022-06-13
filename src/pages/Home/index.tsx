import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ToastAndroid } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomClipboard from '../../components/CustomClipboard';
import Button from '../../components/Button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MyTheme } from '../../../theme';

export default function Home() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [barCode, setBarCode] = useState('');
  const [codeType, setCodeType] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setBarCode(data);
    setCodeType(type);

    ToastAndroid.show('Copiado para área de transferência', ToastAndroid.SHORT);
  };

  if (hasPermission === null) {
    return <Text>É necessário a permissão de câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return (
    <>
      {scanned ? (
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.title}>Detalhes</Text>
            <CustomClipboard code={barCode} codeType={codeType} />
          </View>
          <View style={styles.button}>
            <Button title={'Escanear novamente'} onPress={() => setScanned(false)} />
          </View>
        </View>
      ) : (
        <View style={styles.scanContainer}>
          <View style={styles.scan}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
          <View style={styles.dispatch}>
            <Text style={styles.dispatchText}>Escaneie o código</Text>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scanContainer: {
    flex: 1,
  },
  scan: {
    flex: 1,
  },
  title: {
    padding: 30,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    padding: 10,
    margin: 10
  },
  dispatch: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: MyTheme.colors.black,
    alignContent: 'center',
    justifyContent: 'center'
  },
  dispatchText: {
    textAlign: 'center',
    color: MyTheme.colors.white,
    fontSize: 30,
    fontWeight: '500'
  }
});