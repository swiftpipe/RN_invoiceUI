/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';

const Line = () => {
  return (
    <View style={{position: 'relative'}}>
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          left: -10,
          flexDirection: 'row',
        }}>
        <View
          style={[
            styles.dot,
            {
              borderWidth: 0,
              backgroundColor: '#ededed',
              shadowColor: '#000',
              shadowRadius: 3,
              shadowOffset: {
                width: 2,
                height: 1,
              },
              shadowOpacity: 0.0,
            },
          ]}
        />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View style={styles.dashed_row} />
        <View
          style={[
            styles.dot,
            {
              borderWidth: 0,
              backgroundColor: '#ededed',

              shadowColor: '#000',
              shadowRadius: 3,
              shadowOffset: {
                width: 2,
                height: 1,
              },
              shadowOpacity: 0.0,
            },
          ]}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.block}>
            <View style={{flex: 1}}>
              <Text style={styles.heading}>Garuda GA-153</Text>
              <Text style={styles.body}>Economy ( Subclass L)</Text>
            </View>
            <Image
              style={styles.imageLogo}
              source={require('./assets/logo.png')}
            />
          </View>

          <Line />

          <View style={styles.block}>
            <View style={styles.block1}>
              <View>
                <Text style={styles.heading}>08:55</Text>
                <Text style={styles.body}>28 Mar</Text>
              </View>
              <View>
                <Text style={styles.body}>1h 40m</Text>
              </View>
              <View>
                <Text style={styles.heading}>08:55</Text>
                <Text style={styles.body}>28 Mar</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', paddingHorizontal: 20}}>
              <View style={styles.dot} />
              <View style={styles.dashed} />
              <View style={styles.dashed} />
              <View style={styles.dashed} />
              <View style={styles.dashed} />
              <View style={styles.dashed} />
              <View style={styles.dashed} />
              <View style={[styles.dot, {backgroundColor: '#f14d68'}]} />
            </View>
            <View style={styles.block1}>
              <View>
                <Text style={styles.heading}>Batam (BTH)</Text>
                <Text style={styles.body}>Hang Nadim</Text>
              </View>
              <View>
                <Image
                  style={styles.imageLogo}
                  source={require('./assets/logo.png')}
                />
              </View>
              <View>
                <Text style={styles.heading}>Jakarta (CGK)</Text>
                <Text style={styles.body}>Soekamo Hatta...</Text>
              </View>
            </View>
          </View>
          <Line />
          <View style={[styles.block]}>
            <View style={{flex: 1}}>
              <Text style={styles.body}>Airline Booking Code (PNR) </Text>
              <Text
                style={[
                  styles.heading,
                  {
                    color: '#f14d68',
                    textAlign: 'center',
                  },
                ]}>
                55F60F
              </Text>
            </View>
          </View>
          <Line />
          <View style={[styles.block]}>
            <View style={{flex: 1}}>
              <Text style={styles.heading}>Passenger (s) </Text>
              <View
                style={{
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>1</Text>
                <View style={{flex: 1, paddingHorizontal: 10}}>
                  <Text style={styles.heading}>Mr ABC ... </Text>
                  <Text style={styles.body}>20kg In-flight... </Text>
                </View>
                <View>
                  <Text style={{backgroundColor: '#ededed', padding: 6}}>
                    Adult
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  lineCenter: {
    width: 10,
    height: '100%',
    borderWidth: 1,
    // borderLeftColor: 'gray',
    borderStyle: 'dashed',
  },
  dot: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#f14d68',
    borderRadius: 10,
  },
  dashed: {
    height: 10,
    width: 1,
    marginBottom: 10,
    backgroundColor: 'gray',
  },
  dashed_row: {
    height: 1,
    width: 10,
    marginRight: 10,
    backgroundColor: 'gray',
  },
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    padding: 10,
  },
  imageLogo: {
    width: 60,
    height: 60,
  },
  block: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  block1: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: 'gray',
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 3,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 9999,
    shadowOpacity: 0.2,
    margin: 10,
  },
});

export default App;
