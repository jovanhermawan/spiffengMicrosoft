import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Image, StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import Page from'./Page';
export default function Profile({ navigation }) {
  return (

  	<View>
	  	<View style={styles.top}>
	  	<View style={{flex:1, flexDirection: 'row', top:50, justifyContent: 'space-between'}}>
      <View style={{height:200}}>
	  	<Button success transparent
        title="Live Cam"
        color="#5DB075"
        onPress={() => navigation.push('Home')}
      /></View>
      <View style={{height:200}}>
      <Button success transparent
        title="Message"
        color="#5DB075"
        onPress={() => navigation.push('Message')}
      /></View>
 
      
      
	  	<View style={{height:200}}>
      <Button success transparent
        title="Nutrition"
        color="#5DB075"
        onPress={() => navigation.push('Nutrition')}
      /></View><View style={{height:200}}>
      <Button success transparent
        title="Growth"
        color="#5DB075"
        onPress={() => navigation.push('Growth Rate')}
      /></View>
	  	</View>
	  	</View>
	  	<View
    />
	  	<View style={{alignItems:'center', top: 128}}>
      <View style={[styles.topview, styles.midtopview]}><Text style={[styles.toptext, styles.midtop]}>Profile</Text></View>
		    <View>
		      <Image style={styles.circle} source={require('./baby.jpg')}></Image>
		    </View>
	    </View>
	    <View style={{top: 135, alignItems:'center', justifyContent: 'center'}}><Text style={{fontSize:30, fontWeight: 'bold'}}>Victoria Robertson</Text></View>
	    <View style={{top: 140, alignItems:'center', justifyContent: 'center'}}><Text style={{fontSize:16, fontWeight: 'bold'}}>A mantra goes here</Text></View>
	    <View style={{top: 190, flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
	    	<View style={{backgroundColor: '#F6F6F6',  borderRadius:100, width:170, height:50, borderWidth:1, borderColor:'#E8E8E8', alignItems:'center', justifyContent:'center'}}>
	    		<Text style={{fontSize:16, color:'#BDBDBD', fontWeight:'bold'}}>
	    			Posts
	    		</Text>
	    	</View>
	    	<View style={{backgroundColor: '#FFFFFF',  borderRadius:100, width:170, height:50, borderWidth:1, borderColor:'#E8E8E8', alignItems:'center', justifyContent:'center'}}>
	    		<Text style={{fontSize:16, color:'#5DB075', fontWeight:'bold'}}>
	    			Photos
	    		</Text>
	    	</View>
	    </View>
	    <View style={{top: 230, alignItems:'center', justifyContent: 'center'}}><View style={{backgroundColor: '#F6F6F6',  borderRadius:8, width:343, height:300, borderWidth:1, borderColor:'#E8E8E8', alignItems:'center', justifyContent:'center'}}><Text></Text></View></View>
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
  	fontSize:30,
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
