import React, { Component } from 'react';
import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native'; 
import { ListItem } from 'react-native-elements';
import Header from "../components/header";
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [ "Coupon", "Purchase History", "Order History", "Profile Settings", "App Settings"]
    

export default class Membership extends Component {
  render() {
      return (
        <SafeAreaView style={styles.safeAreaView}>
        {/* <Header headColor='white' >style={{width: 66, height: 58}}
        <Image style={{width: 50, height: 50}} source={require('../assets/KleinsLogo1.png')}/>
        </Header> */}
        <Header headColor='black' >Kleins</Header>
        <ScrollView style={styles.scrollContainer}>
            <View>
                <Text style={styles.title}>Membership</Text>
            </View>
            <View style={styles.container}>
            <Icon name='barcode' color={"black"} size={100} />
            </View>
            <View>
                {
                    list.map((l, i) => (
                    <ListItem key={i} title={l} 
                    bottomDivider
                    chevron
                    />
                    ))
                }
        </View>
          </ScrollView>
      </SafeAreaView>
                 
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }, 
    title:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:40,
    },
});
