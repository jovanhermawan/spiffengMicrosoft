import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import Page from'./Page';
export default function login({ navigation }) {
  return (

  	<View>
	  	<View style={{alignItems:'center'}}>
     
		    <View>
		      <Image source={require('./login.png')}></Image>
		    </View>
	    </View>
	   <View style={{height:100, bottom:385,left:150,width:100,border: "none", elevation:0,opacity:0}}>
      <Button success transparent
        title="Log In"
        color="#5DB075"
        onPress={() => navigation.push('Details')}
      /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  left:{
  	position:'absolute',
  	left: 17
  },
  right:{
  	position:'absolute',
  	right: 14
  },
  midtopview:{
  	width:100
  },
  midtop:{
  	fontSize:20,
  	fontWeight:'bold'
  },
  topview:{
  	justifyContent:'center',
  	alignItems: 'center',
  	width:60,
  	height:50
  },
  toptext: {
  	fontFamily: 'sans-serif',
  	color: 'white'
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor:'#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFF'
  },
  top: {
  	position: 'absolute',
	height: 245,
	left: -1,
	right: 0,
	top: 0,
	backgroundColor: '#5DB075'
  },
});
