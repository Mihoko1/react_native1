import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); 

export default class Card extends React.Component {
    constructor(props) {
        super(props);        
    }

    render(){
        return (
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer, {width: width, height: width / 3}}>
                    <Image
                        style={`${styles.image} ${styles.item}`, {width: width / 3, height: width / 3}} 
                        source={{ uri: this.props.image }}
                    />
                </View>
                <View style={`${styles.textContainer} ${styles.item}`}> 
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.price}>$ {this.props.price}</Text> 
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '80%',
        height: width / 3 + 10,
        marginRight: 20,
        marginLeft: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 30,   
    },
    imageContainer: {
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems:'center', 
    },
    
    image: {
        width: 50, 
        height: 50, 
        resizeMode: 'cover',
        
    },
    textContainer: {
        width: 100,
        height: 50,
        textAlign:'center',
        
    },
    name:{
        fontSize: 16,
        fontWeight: "bold",
        bottom: 90,
        left: width /3 + 15,
        
    },
    price:{
        marginHorizontal:15,
        bottom: 70,
        fontSize: 18,
        left: width /3 + 15,
       
    },
   
    iconStyling:{
        paddingRight: 5,
        color: '#e53935',
    }, 
  });
  