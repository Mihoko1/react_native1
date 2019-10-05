import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { Button} from 'react-native-elements';
import ProductsJson from '../product.json';
import Card from "../components/card";
import Header from "../components/header";

var Dimensions = require('Dimensions');
var { width} = Dimensions.get('window'); 


export default class HomeScreen extends Component {

  state = { products: []}

  componentDidMount(){
    this.setState({products: ProductsJson});
  }

  render() {
      return (

        <SafeAreaView style={styles.safeAreaView}>
          {/* <Header headColor='white' >style={{width: 66, height: 58}}
          <Image style={{width: 50, height: 50}} source={require('../assets/KleinsLogo1.png')}/>
          </Header> */}
          <Header headColor='black' >Kleins</Header>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              <ImageBackground source={require('../assets/top.png')} style={styles.backImage}>
                <Text style={styles.innerText}>Made by every moment</Text>
                <Text style={styles.innerText2}>Jewerly for creating moment</Text>
              </ImageBackground>
            </View>
                  
              <View>
                <Text style={styles.title}>NEW ARRIVALS</Text>
              </View>
              <View style={styles.slideHContainer}>
              
                <ScrollView horizontal={true} 
                  style={styles.slideHContainer}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}>
                  <React.Fragment>
                    {
                      this.state.products.map( (product, index) =>
                      <Card key={index} name={product.name} image={product.image} category={product.category} price={product.price}/>
                      )
                    }
                  </React.Fragment>
                 
                </ScrollView>
                </View>
              
              <ImageBackground source={require('../assets/top1.png')} style={styles.images,{width: width, height: 200}}>
                <Button
                  style= {styles.buttonTop}
                  // onPress={() => this.props.navigate('ProductMain')}
                  title="NEW SEASON RIVA"
                  buttonStyle={{backgroundColor: 'white'}}
                  titleStyle={{ color: 'black' }}
                />
              </ImageBackground>
              <ImageBackground source={require('../assets/top2.png')} style={styles.images,{width: width, height: 200}}>
                <Button
                  style= {styles.buttonTop}
                  // onPress={() => this.props.navigate('productMain')}
                  title="EMILY WILLIAMS X KLEINS"
                  buttonStyle={{backgroundColor: 'white'}}
                  titleStyle={{ color: 'black' }}
                  />

              </ImageBackground>
              <ImageBackground source={require('../assets/top3.png')} style={styles.images,{width: width, height: 200}}>
                <Button
                  style= {styles.buttonTop}
                  // onPress={() => this.props.navigate('productMain')}
                  title="PEARL AND WAVES"
                  buttonStyle={{backgroundColor: 'white'}}
                  titleStyle={{ color: 'black' }}
                  />
              </ImageBackground>
              <ImageBackground source={require('../assets/top4.png')} style={styles.images, {width: width, height: 200}}>
                <Button
                  style= {styles.buttonTop}
                  // onPress={() => this.props.navigate('productMain')}
                  title="NEW SHINES"
                  buttonStyle={{backgroundColor: 'white'}}
                  titleStyle={{ color: 'black' }}
                />
              </ImageBackground>
            
            </ScrollView>
        </SafeAreaView>
            
           
      );
  }
}

const styles = StyleSheet.create({

  innerText:{
    color:'white',
    fontSize: 24,
    fontWeight:'bold',
  },
  innerText2:{
    color:'white',
    fontWeight:'bold',
  },
  backImage:{
    height: 300,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideHContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  slideImg: {
    width: 250,
    height:250,
    backgroundColor: 'red',
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   
  cardBox: {
      alignItems:'center',
  },
  
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:40,
  },
  images:{
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTop:{
    color:'white',
    width: 300,
    height: 50,
    fontSize: 24,
    backgroundColor: "#fff",
    fontWeight: 'bold',
    color:'#000',
    textAlign: 'center',
    marginTop: 120,
    marginLeft: 'auto',
    marginRight:'auto',
  },
});
