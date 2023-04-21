import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const data = [
  { label: 'Exponents', value: '1' },
  { label: 'Squares and square roots', value: '2' },
  { label: 'Cubes and cube roots', value: '3' },
  { label: 'Simple Interest', value: '4' },
  { label: 'Compound Interest', value: '5' },
  { label: 'Profit Loss Discount', value: '6' },
  { label: 'Square', value: '7' },
  { label: 'Rectangle', value: '8' },
  { label: 'Circle', value: '9' },
  { label: 'Other Parallelograms', value: '10' },
];

const Menuscreen = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contents</Text>
      <Text style={styles.about}>
        {' '}
        Please select any one of the topic from the dropdown below to continue{' '}
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="blue" name="Safety" size={30} />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate('Rectangle');
        }}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menuscreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: 350,
    marginStart: -60,
    backgroundColor: '#D4F7FF',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 25,
  },
  selectedTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 70,
    fontSize: 25,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 80,
  },
  header: {
    padding: 20,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Ubuntu_500Medium',
    marginVertical: -50,
    marginBottom: 15,
  },
  about: {
    fontSize: 20,
    textAlign: 'left',
    justifyContent: 'center',
    marginStart: -50,
    marginBottom: 25,
    fontWeight: 'bold',
  },

  button: {
    width: '100%',
    backgroundColor: '#E1F8FD',
    borderRadius: 25,
    borderColor: '#240B45',
    borderWidth: 7,
    height: 90,

    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
