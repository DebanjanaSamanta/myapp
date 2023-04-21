import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default class Rectanglef extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScrollView>
          <Text style={styles.header}>Formula</Text>

          <View style={[styles.textboxholders, { backgroundColor: '#ADA2FF' }]}>
            <Text style={styles.subheaders}> Calculating Permimeter</Text>
            <Text style={{ fontSize: 20 }}>
              To calculate the perimeter of rectangle we need to first take the
              length and the breadth and then by using the formula
              <Text
                style={{ fontSize: 25, color: '#141019', fontWeight: 'bold' }}>
                2(Length+breadth)
              </Text>
              we can get the answer .For example:
            </Text>
            <View style={styles.exapleholder}>
              <Text style={{ fontSize: 18, color: 'red' }}>
                Find the perimeter of the rectangle whose length is 15cm and
                breadth is 12cm.
                <Text style={{ color: 'blue' }}>Solution</Text>
                <Text style={{ color: 'black' }}>
                  Given that the length is 15cm and breadth is 12cm.By using our
                  formula we get=> 2(l+b)= 2(15+12)= 2*27 = 54cm answer. Hence
                  we get the perimeter of the rectangle as 54cm
                </Text>
              </Text>
            </View>
          </View>

          <View style={[styles.textboxholders, { backgroundColor: '#B4CBF0' }]}>
            <Text style={styles.subheaders}> Calculating Area</Text>
            <Text style={{ fontSize: 20 }}>
              To calculate the area of rectangle we need to first take the
              length and the breadth and then by using the formula
              <Text
                style={{ fontSize: 25, color: '#141019', fontWeight: 'bold' }}>
                Length*breadth
              </Text>
              we can get the answer .For example:
            </Text>
            <View style={styles.exapleholder}>
              <Text style={{ fontSize: 18, color: 'red' }}>
                Find the area of the rectangle whose length is 15cm and breadth
                is 10cm.
                <Text style={{ color: 'blue' }}>Solution</Text>
                <Text style={{ color: 'black' }}>
                  Given that the length is 15cm and breadth is 10cm.By using our
                  formula we get=> l*b= 15*10= 150cm answer Hence we get the
                  Area of the rectangle as 150sqcm
                </Text>
              </Text>
            </View>
          </View>

          <View style={[styles.textboxholders, { backgroundColor: '#ADA2FF' }]}>
            <Text style={styles.subheaders}> Calculating Volume</Text>
            <Text style={{ fontSize: 20 }}>
              To calculate the volume if we have a cuboid(3D rectangle) we need
              to first take the length, the breadth and height and then by using
              the formula
              <Text
                style={{ fontSize: 25, color: '#141019', fontWeight: 'bold' }}>
                Length*breadth*height <Text> </Text>
              </Text>
               we can get the answer .For example:
            </Text>
                      <View style={styles.exapleholder}>
              <Text style={{ fontSize: 18, color: 'red' }}>
                Find the area of the rectangle whose length is 15cm and breadth
                is 10cm.
                <Text style={{ color: 'blue' }}>Solution</Text>
                <Text style={{ color: 'black' }}>
                  Given that the length is 15cm height=12cm and breadth is 10cm.By using our
                  formula we get=> l*b*h= 15*10*12=1800cm answer Hence we get the
                  Area of the rectangle as 1800cm^3
                </Text>
              </Text>
            </View>

          </View>

          <View style={[styles.textboxholders, { backgroundColor: '#B4CBF0' }]}>
            <Text style={styles.subheaders}>
              Calculating Total Surface area
            </Text>
            <Text style={{ fontSize: 20 }}>
              To calculate the total surface area of cuboid we need to first
              take the length , the breadth , the height and then by using the
              formula
              <Text
                style={{ fontSize: 25, color: '#141019', fontWeight: 'bold' }}>
                {' '}
                2(Length*breadth + Length*height + breadth*height)
              </Text>
              we can get the answer .For example:
            </Text>
                                  <View style={styles.exapleholder}>
              <Text style={{ fontSize: 18, color: 'red' }}>
                Find the area of the rectangle whose length is 15cm and breadth
                is 10cm.
                <Text style={{ color: 'blue' }}>Solution</Text>
                <Text style={{ color: 'black' }}>
                  Given that the length is 15cm height=12cm and breadth is 10cm.By using our
                  formula we get=> 2(lh+bh+lb)= 2(15*12+10*12+15*10)= 2*450 =900sqcm answer Hence we get the
                  Area of the rectangle as 900sqcm
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    fontSize: 40,
    fontFamily: 'Lobster_400Regular',
    justifyContent: 'center',
    flexDirection: 'flex-start',
    alignItems: 'center',
    color: 'black',
    marginBottom: 20,
  },
  subheaders: {
    marignTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textboxholders: {
    marginStart: 10,
    marginEnd: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 25,
  },
  exapleholder: {
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#C8E1CC',
  },
});
