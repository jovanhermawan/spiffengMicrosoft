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

const MyProgressChart = () => {
  return (
    <>
      <Text style={styles.header}>Expense Chart</Text>
      <ProgressChart
        data={[0.3]}
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
      />
    </>
  );
};



const Expenses = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>

        <View style={styles.container}>
          <View>
            {/*Example of Bar Chart*/}
            <MyProgressChart />
          </View>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Carrot
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 5.10 SGD 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Duckweed
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 8.50 SGD 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Corn
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 4.35 SGD 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Potato
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 2.02 SGD 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Cocoa
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 6.40 SGD 
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            Strawberry
          </Text>
        </View>
        <View style={{left:250}}>
          <Text>
            $ 3.80 SGD 
          </Text>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};

export default Expenses;

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