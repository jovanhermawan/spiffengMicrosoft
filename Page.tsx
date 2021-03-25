import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

export default function Page({ navigation }) {
  return (
    <View style={{backgroundColor:'#F9F9FB', flex:1}}>
    
      <View style={{top: 80, alignItems:'center', justifyContent: 'center'}}>
        <Text style={{fontSize:22, fontWeight: 'bold'}}>
          Live Cam
        </Text>
      </View>
      <View style={{top: 100, alignItems:'center', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#979797',  borderRadius:8, width:343, height:196, alignItems:'center', justifyContent:'center'}}>
        </View>
      </View>
      <View style={{top: 100, alignItems:'center'}}>
        <View style={{backgroundColor: '#FFFFFF',  borderRadius:8, width:343, height:112, alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
          <View style={{flex: 1,flexDirection:'row', alignItems:'center'}}>
            <View style={{width:110, height:16}}><Text style={{color:'#1C1939'}}>Temp</Text></View><View style={{width:100, height:16}}><Text style={{color:'#1C1939'}}>Humidity</Text></View><View style={{width:100, height:16}}><Text style={{color:'#1C1939'}}>Soil Moisture</Text></View>
          </View>
          <View style={{flex: 1,flexDirection:'row', alignItems:'center'}}>
            <View style={{width:110, height:75}}><Text style={{fontSize:24, fontWeight:'bold'}}>30C</Text></View><View style={{width:100, height:75}}><Text style={{fontSize:24, fontWeight:'bold'}}>80%</Text></View><View style={{width:100, height:75}}><Text style={{fontSize:24, fontWeight:'bold'}}>36%</Text></View>
          </View>
        </View>
      </View>
      <View style={{top:140, left:40}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#1C1939'}}>
          Updates
        </Text>
      </View>
      <View style={{left:40, bottom:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View>
          <Image style={{top:200,width:41, height:46, borderRadius:16}} source={require('./water.png')}></Image>
        </View>
        <View style={{top:200,left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Plant Watered
          </Text>
          <Text>
            4 minutes ago
          </Text>
        </View>
      </View>
      <View style={{top:100, left:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View>
          <Image style={{width:41, height:46, borderRadius:16}} source={require('./harvest.png')}></Image>
        </View>
        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Harvested 3 Stalks
          </Text>
          <Text>
            2 days ago
          </Text>
        </View>
      </View>
      <View style={{top:40, left:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View>
          <Image style={{width:41, height:46, borderRadius:16}} source={require('./trade.png')}></Image>
        </View>
        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Traded 100g with @Leonsky
          </Text>
          <Text>
            5 days ago
          </Text>
        </View>
      </View>
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
