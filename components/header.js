import  React from 'react';
import  { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      return (
        <View style={styles.header}>
          <Text style={ styles[this.props.headColor] }>{this.props.children}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      header: {
          height: 50,
          justifyContent: 'center',
          backgroundColor: '#fff',
      },
      black:{
        color: '#000',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
      }, 
  });
