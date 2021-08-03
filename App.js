import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import Preview from './src/Preview';
import FlatListSlider from './src/FlatListSlider';
import Card from './src/Card';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc: 'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.separator} />
          <ImageBackground
            source={require('./src/assets/background.png')}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                width: '100%',
                alignContent: 'center',
                alignItems: 'center',
                paddingTop: 30,
              }}>
              <Image
                style={styles.tinyLogo}
                source={require('./src/assets/account.png')}
              />
              <Text style={styles.textStyle}>Lottie Curtis</Text>
              <View style={styles.tabletView}>
                <Text>You have 3 Products</Text>
              </View>
            </View>
            <Card style={styles.card}>
              <FlatListSlider
                data={this.state.data}
                width={275}
                timer={4000}
                component={<Preview />}
                onPress={item => alert(JSON.stringify(item))}
                indicatorActiveWidth={40}
                contentContainerStyle={styles.contentStyle}
              />
            </Card>
          </ImageBackground>
          <View style={styles.separator} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
  tinyLogo: {
    height: 80,
    width: 80,
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    paddingTop: 20,
  },
  tabletView: {
    marginTop: 10,
    height: 30,
    width: 160,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
