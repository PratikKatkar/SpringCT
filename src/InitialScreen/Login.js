import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('123');
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    if (isValidEmail(email) && password.trim() !== '') {
      setIsLoading(true); // Start loading
      callLoginApi();
    } else {
      alert('Please enter a valid email and password!');
    }
  };

  const callLoginApi = () => {
    const data = {
      email,
      password,
    };
    axios
      .post('https://reqres.in/api/login', data)
      .then(async (response) => {
        setIsLoading(false); // Stop loading
        console.log('resxxx', response.data);
        navigation.replace('HomeStack');
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('token', response?.data?.token);
      })
      .catch((error) => {
        alert('User not found. Please enter correct credentials!');
        setIsLoading(false); // Stop loading
        console.error('Error sending data: ', error);
      });
  };

  return (
    <ImageBackground
      source={require("../../Assets/background.jpg")}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  input: {
    width: '100%',
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 80,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
