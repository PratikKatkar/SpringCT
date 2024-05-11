import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';

const Employees = ArrayList => {
  console.log('xxxxxxxx', ArrayList.ArrayList);
  return (
    <View>
      <Text style={{textAlign: 'center'}}>Employees List</Text>
      <FlatList
        data={ArrayList.ArrayList}
        renderItem={({item}) => {
          console.log('xxx');
          return (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.title}>Name : {item.name}</Text>
                <Text style={styles.description}>Address : {item.address}</Text>
                <Text style={styles.description}>City: {item.city}</Text>
                <Text style={styles.description}>Age : {item.age}</Text>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                justifyContent: 'center',
                marginVertical: 100,
                color:'#000'
              }}>
              No Data
            </Text>
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    ArrayList: state.data.EmployeesData,
  };
};

export default connect(mapStateToProps, null)(Employees);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
