import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  
} from 'react-native';

export default class Welcomescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Maths Mate</Text>
        <Image
          source={require('../assets/studying.png')}
          style={styles.image}
        />
        <Text style={styles.about}>
          An app that helps you to learn some of the basic mathematics problems
          and learn about their formulae
        </Text>
        <TouchableOpacity
          style={styles.start}
          onPress={() => this.props.navigation.navigate('BottomTab')}>
          <Text style={styles.buttontext}>Click to Start ->></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4DEF2',
    padding: 80,
    //backgroundColor: '#492A',
  },
  header: {
    padding: 20,
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Lobster_400Regular',
    marginVertical: -50,
  },

  about: {
    marginTop: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  start: {
    width: 350,
    backgroundColor: '#E1F8FD',
    borderRadius: 25,
    borderColor: '#240B45',
    borderWidth: 7,
    height: 90,
    marginStart: -50,
    marginTop: 50,
    justifyContent: 'center',
  },
  buttontext: {
    color: '#240B45',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Lobster_400Regular',
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',

    marginTop: 50,
    width: 200,
    height: 200,
  },
});
