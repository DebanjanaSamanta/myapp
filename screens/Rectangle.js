import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class Rectangle extends React.Component {
  constructor() {
    super();
    this.state = {
      perimeter: '',
      area: ' ',
      length: '',
      breadth: '',
      height: '',
      volume: '',
      surfacearea: '',
      text1: '',
      text2: '',
      text3: '',
    };
  }

  render() {
    const { length, breadth, height } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}> Rectangle </Text>

          <Text style={styles.description}>
            Enter any value in any of the boxes{' '}
          </Text>

          <View style={styles.textinputcontainer}>
            <TextInput
              style={styles.inputright}
              onChangeText={(text) => {
                this.setState({ text1: text });
                this.setState({ length: text });
              }}
              value={this.state.text1}
              keyboardType="numeric"
              placeholder="length"
            />

            <TextInput
              style={styles.inputleft}
              onChangeText={(text) => {
                this.setState({ text2: text });
                this.setState({ breadth: text });
              }}
              value={this.state.text2}
              keyboardType="numeric"
              placeholder="breadth"
            />
          </View>

          <TouchableOpacity
            style={styles.start}
            onPress={() => {
              if (length == '') {
                alert('Please enter both the values');
              } else if (breadth == '') {
                alert('Please enter both the values');
              } else if (breadth == '' && length == '') {
                alert('Please enter both the values');
              } else {
                this.setState({ area: length * breadth });
                this.setState({ perimeter: 2 * length + 2 * breadth });
              }
            }}>
            <Text style={styles.buttontext}>Calculate</Text>
          </TouchableOpacity>

          <Text style={styles.perimeter}>
            Perimeter= {this.state.perimeter}{' '}
          </Text>
          <Text style={styles.perimeter}>Area= {this.state.area} </Text>

          <TextInput
            style={styles.inputlefts}
            onChangeText={(text) => {
              this.setState({ text3: text });
              this.setState({ height: text });
            }}
            value={this.state.text3}
            keyboardType="numeric"
            placeholder="Please enter height"
          />

          <TouchableOpacity
            style={styles.starts}
            onPress={() => {
              this.state.height === ''
                ? alert('Please enter any height')
                : this.setState({ volume: length * breadth * height });
              this.setState({
                surfacearea:
                  2 * (length * breadth + length * height + breadth * height),
              });
            }}>
            <Text style={styles.buttontext}>Calculate</Text>
          </TouchableOpacity>

          <Text style={styles.perimeter}>Volume= {this.state.volume} </Text>
          <Text style={styles.perimeter}>
            Surface Area= {this.state.surfacearea}{' '}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEEAF2',
    padding: 80,
  },

  header: {
    //fontSize: 35,
    //color: 'black',
    //marginRight: 50,
    //fontWeight: 'bold',
    // marginTop:-45,
    //marginLeft: 10,
    //marginVertical: -50,

    padding: 20,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Lobster_400Regular',
    marginVertical: -50,
  },
  description: {
    // fontSize: 20,
    // color: 'black',
    // fontWeight: 'italics',

    // marginTop: 20,
    // marginBottom: 25
    marginTop: 50,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },

  inputright: {
    backgroundColor: '#DDF5FF',
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 3,
    height: 55,
    width: 300,
    marginLeft: -40,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
  },
  inputleft: {
    backgroundColor: '#DDF5FF',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 7,
    height: 55,
    width: 300,
    marginLeft: -40,
    marginTop: 25,
    textAlign: 'center',
    fontSize: 25,
  },

  start: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 7,
    backgroundColor: '#C2BACB',
    marginTop: 30,
    marginLeft: 10,
    width: 200,
    height: 50,
    borderColor: 'black',
  },
  buttontext: {
    color: 'white',
    fontSize: 35,
  },

  perimeter: {
    color: '#180234',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
  },

  starts: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 7,
    backgroundColor: '#C2BACB',
    marginTop: 30,
    width: 200,
    height: 50,
    borderColor: 'black',
    marginLeft: 10,
  },
  inputlefts: {
    backgroundColor: '#DDF5FF',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    height: 55,
    width: 300,
    marginLeft: -30,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 5,
  },
});
