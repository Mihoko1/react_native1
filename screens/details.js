import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Details extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>detail</Text>
                <Button
                    title='GoTo Stack2'
                    onPress={() => this.props.navigation.navigate('Stack2')}
                />
            </View>
        );
    }
}