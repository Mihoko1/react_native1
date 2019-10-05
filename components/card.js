import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
  
    }
     
    render(){
        return (

              <View style={styles.cardContainer}>
                      <View style={styles.imageContainer}>
                          <Image
                            style={styles.image} 
                            source={ require('../assets/gold.png') }
                            />
                        </View>
                        
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.price}>{this.props.price}</Text> 
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: 200,
        height: 200,
        marginRight: 20,
        marginLeft: 20,
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
        position:'relative',
     
    },
    imageContainer: {
        width:50,
        height:50,
        marginLeft:20,
    },
    image: {
        width: 150, 
        height: 150, 
        resizeMode: 'cover',
        
    },
    name:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginHorizontal:15,
        marginTop: 80,
  
    },
    price:{
        marginHorizontal:15,
        bottom: 20,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 100
       
    },
   
    iconStyling:{
        paddingRight: 5,
        color: '#e53935',
    }, 
  });
  