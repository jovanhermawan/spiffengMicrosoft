import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import BarChart from "react-native-chart-kit";

export default function ExpensesBarFinal() {
  return (
  	<View style={{backgroundColor:'#F9F9FB', flex:1}}>
	    <View style={{top: 125, alignItems:'center', justifyContent: 'center'}}>
        <Text style={{fontSize:22, fontWeight: 'bold'}}>
          Insights
        </Text>
      </View> 
	    <View style={{top: 150, alignItems:'center', justifyContent: 'center'}}>
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
      <View style={{top:175, left:40}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#1C1939'}}>
          Expenses
        </Text>
      </View>
      <View style={{top:200, left:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Item 1
          </Text>
          <View style={{right:20}}>
          <Text style={{fontWeight:'bold'}}>
            20%
          </Text>
        </View>
      </View>
      <View style={{top:125, left:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View>
          <Image style={{width:41, height:46, borderRadius:16}} source={require('./harvest.png')}></Image>
          </View>
        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Item 2
          </Text>
          <View style={{right:20}}>
          <Text style={{fontWeight:'bold'}}>
            15%
          </Text>
        </View>
      </View>
      <View style={{top:50, left:40, flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
        <View>
          <Image style={{width:41, height:46, borderRadius:16}} source={require('./trade.png')}></Image>
          </View>
        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Item 3
          </Text>
          <View style={{right:20}}>
          <Text style={{fontWeight:'bold'}}>
            15%
          </Text>
        </View>
      </View>
    </View>
  );
}

const data = {
  labels: ["Item 1", "Item 2", "Item 3"],
  datasets: [
    {
      data: [20, 45, 28]
    }
  ]
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
