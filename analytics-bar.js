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

const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>My Item</Text>
      <BarChart
        data={{
          labels: ['Carrot', 'Duckweed', 'Corn', 'Potato', 'Cocoa', 'Strawberry'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel={''}
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
      />
    </>
  );
};



const Analytics = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>

        <View style={styles.container}>
          <View>
            {/*Example of Bar Chart*/}
            <MyBarChart />
          </View>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Carrot
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            20 qty
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Duckweed
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            45 qty
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Corn
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            28 qty
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Potato
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            80 qty
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Cocoa
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            99 qty
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Strawberry
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            43 qty
          </Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

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