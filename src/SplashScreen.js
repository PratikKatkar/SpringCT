import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = ({navigaiton}) => {
  const navigation = useNavigation();
  console.log(navigaiton);
  useEffect(() => {
    const call = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(call);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../Assets/AppLogoBlue.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
});
