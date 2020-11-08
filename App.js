import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component{
  render(){
    return(
       <Button title="Click me" color = "red"></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
        <View style={{marginTop:500}}>
           <RedButton />
           <Text> My First React Component</Text>
        </View>
    );
  }
}