import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { addEmployee } from '../Redux/Action';

const HomeScreen = ({ add }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getUserInformation = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('email');
        setEmail(storedEmail);
      } catch (error) {
        console.error('Error retrieving email:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserInformation();
  }, []);

  const handleAdd = () => {
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }
    if (!address.trim()) {
      setAddressError('Address is required');
      return;
    }
    if (!city.trim()) {
      setCityError('City is required');
      return;
    }
    if (!age.trim()) {
      setAgeError('Age is required');
      return;
    }

    const datax = {
      name: name,
      address: address,
      city: city,
      age: age,
    };
    add(datax);
    ToastAndroid.show('Employee Added Successfully', ToastAndroid.SHORT);
    setName('');
    setAge('');
    setAddress('');
    setCity('');
  };

  return (
    <>
      <View style={{ backgroundColor: '#daa2f2' }}>
        <Text style={styles.section}>User Profile</Text>
        {isLoading ? (
          <Text>Loading user email...</Text>
        ) : (
          <Text
            style={{
              color: '#000',
              fontWeight: '700',
              fontSize: 16,
              marginHorizontal: 20,
              textAlign: 'center',
              padding: 10,
            }}>
            user email : {email}
          </Text>
        )}
      </View>
      <View>
        <Text style={styles.section}>Add Employees</Text>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError('');
            }}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          <Text style={styles.inputText}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {addressError ? (
            <Text style={styles.errorText}>{addressError}</Text>
          ) : null}
          <Text style={styles.inputText}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={(text) => {
              setCity(text);
              setCityError('');
            }}
          />
          {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}
          <Text style={styles.inputText}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            inputMode="numeric"
            onChangeText={(text) => {
              setAge(text);
              setAgeError('');
            }}
          />
          {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}
          <Button title="Add" onPress={handleAdd} />
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('ProfileDataxxxxxxxxx', state.data);
  return {
    ProfileData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => {
      dispatch(addEmployee(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  section: {
    textAlign: 'center',
    color: '#000',
    fontSize: 17,
    padding: 10,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
  inputText: { marginBottom: 5 },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});
