import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Wishcard from "../components/wishCard";
import Header from "../components/header";
import WishlistJson from '../wishlist.json';

var Dimensions = require('Dimensions');
var { width} = Dimensions.get('window'); 


export default class WishlistScreen extends Component {

    state = { products: []}

    componentDidMount(){
    this.setState({products: WishlistJson});
  }

  render() {
      return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header headColor='black' >Kleins</Header>
            <ScrollView style={styles.scrollContainer}>
                 <React.Fragment>
                    {
                      this.state.products.map( (product, index) =>
                      <Wishcard key={index} name={product.name} image={product.image} category={product.category} price={product.price}/>
                      )
                    }
                </React.Fragment>
            </ScrollView>
        </SafeAreaView>
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
