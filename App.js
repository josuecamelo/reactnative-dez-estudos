import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
  } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}> 
        <Text>Josué</Text>
      </View>    
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;