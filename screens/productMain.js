import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

export default class ProductMain extends Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>ProductMain screen - I'll continue to make it later!</Text>
          </View>
      );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
