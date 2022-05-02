import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Text, Button,Dimensions, SafeAreaView, ScrollView } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { generateRandomGraphData } from '../utils/graphData'
import { LineChart } from 'react-native-wagmi-charts';
import { ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import AnimatedNumbers from 'react-native-animated-numbers';
export const { width: SIZE } = Dimensions.get('window');

const POINTS = 70

export default GraphPage = () => {
  const [price, setPrice] = useState(0)
  const [valueIndex, setValueIndex] = useState(0)
  const [todayPrice, setTodayPrice] = useState(20.5)

  const updatePriceTitle = (p) => {
    try {
      const parsedData = JSON.parse(p)
      setPrice(parsedData)
      // console.log(parsedData, 'this is parsed')
    } catch (e) {
      // console.log(e,p['value'])
      setPrice(p['value'])
    }
  }

  const [animateToNumber, setAnimateToNumber] = React.useState(7979);

  const increase = () => {
    setAnimateToNumber(animateToNumber + 19);
  };
  const [points, setPoints] = useState(() => generateRandomGraphData(POINTS))
  const priceMin = [20, 21, 12, 13, 25]
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25
    },
    {
      timestamp: 1625946300000,
      value: 33545.25
    },
    {
      timestamp: 1625947200000,
      value: 33510.25
    },
    {
      timestamp: 1625948100000,
      value: 33215.25
    }
  ]
  const data2rainbow = [
    { x: 1453075200, y: 1.47 }, { x: 1453161600, y: 1.37 },
    { x: 1453248000, y: 1.53 }, { x: 1453334400, y: 1.54 },
    { x: 1453420800, y: 1.52 }, { x: 1453507200, y: 2.03 },
    { x: 1453593600, y: 2.10 }, { x: 1453680000, y: 2.50 },
    { x: 1453766400, y: 2.30 }, { x: 1453852800, y: 2.42 },
    { x: 1453939200, y: 2.55 }, { x: 1454025600, y: 2.41 },
    { x: 1454112000, y: 2.43 }, { x: 1454198400, y: 2.20 },
  ];
  const pointsrainbow = monotoneCubicInterpolation({ data2rainbow, range: 40 });
  const refreshData = useCallback(() => {
    
    setPoints(generateRandomGraphData(POINTS))
  }, [])

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#fff' }]}>


      <LineGraph
        style={styles.graph}
        animated={true}
        color="#6a7ee7"
        points={points}
        enablePanGesture={true}
        enableFadeInMask={false}
        onPointSelected={(p) => updatePriceTitle(p)}
        selectionDotShadowColor={'#fee344'}
      />
      <View style={styles.row}>
      <AnimatedNumbers
        includeComma
        animateToNumber={animateToNumber}
        fontStyle={{fontSize: 50, fontWeight: 'bold'}}
      />
      <Button title="increase" onPress={increase} />
        <Text style={[styles.title, { color: '#fee344' }]}>
          and {price}
        </Text>

      </View>
      <Button title="Refresh" onPress={refreshData} />


      <View style={{ flex: 1, }}>
        <LineChart.Provider data={data}>
          <LineChart>
            <LineChart.Path />
            <LineChart.CursorLine />
          </LineChart>
          <LineChart.PriceText style={{ position: 'absolute' }} />
          <LineChart.DatetimeText style={{ position: 'absolute', right: 5 }} />
        </LineChart.Provider>
        <View style={styles.spacer} />
      </View>
      {/* <View style={{ backgroundColor: 'black' }}>
        <ChartPathProvider data={{ pointsrainbow, smoothingStrategy: 'bezier' }}>
          <ChartPath height={SIZE / 2} stroke="#ffffff" width={SIZE} />
          <ChartDot style={{ backgroundColor: '#2fe' }} />
          <CurrentPositionVerticalLine/>
          <OpeningPositionHorizontalLine/>
        </ChartPathProvider>
      </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  spacer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  graph: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 1.4,
    marginVertical: 20,
  },
  miniGraph: {
    width: 40,
    height: 35,
    marginLeft: 5,
  },
  controls: {
    flexGrow: 1,
    justifyContent: 'center',
  },
})