// 7 Type of Graph using React Native Chart Kit
// https://aboutreact.com/react-native-chart-kit/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Nutritional Diet Intake</Text>
      <PieChart
        data={[
          {
            name: 'Carrot',
            population: 0.7,
            color: 'rgba(131, 142, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Duckweed',
            population: 0.5,
            color: 'rgba(131, 90, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Duckweed',
            population: 0.4,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Potato',
            population: 0.3,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Cocoa',
            population: 0.8,
            color: '#ffffff',
            color: 'rgb(0, 0)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Strawberry',
            population: 0.4,
            color: 'rgb(0, 0, 255)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            {/*Example of Bar Chart*/}
            <MyPieChart />
          </View>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Carrot
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            70% Recommended Intake 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Duckweed
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            50% Recommended Intake 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Corn
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            40% Recommended Intake 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Potato
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            30% Recommended Intake 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Cocoa
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            80% Recommended Intake 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Strawberry
          </Text>
        </View>
        <View style={{left:150}}>
          <Text>
            40% Recommended Intake 
          </Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
