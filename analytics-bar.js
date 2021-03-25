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
      <Text style={styles.header}>Growth Rate</Text>
      <BarChart
        data={{
          labels: ['08/02', '09/02', '10/02', '11/02', '12/02', '13/02'],
          datasets: [
            {
              data: [0.02, 0.03, 0.02, 0.02, 0.03, 0.02],
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
        <Text>
          </Text>
          <Text style={{fontWeight:'bold'}}>
            13/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.02 cm
          </Text><Text>
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            12/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.03 cm
          </Text><Text>
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            11/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.02 cm
          </Text><Text>
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            10/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.02 cm
          </Text><Text>
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            09/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.03 cm
          </Text><Text>
          </Text>
        </View>

        <View style={{left:20}}>
          <Text style={{fontWeight:'bold'}}>
            08/02/21
          </Text>
        </View>
        <View style={{left:20}}>
          <Text>
            Average Growth of 0.02 cm
          </Text><Text>
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