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

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: 'http://77.68.124.139/odisha-tourism/ota_api/02.png',
          iconImage: '',
          title: 'Moonstone Keychain',
          desc: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
        },
        {
          image: 'http://77.68.124.139/odisha-tourism/ota_api/01.png',
          iconImage: '',
          title: 'Sapphire Keychain',
          desc: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
        },
        {
          image: '',
          iconImage: 'http://77.68.124.139/odisha-tourism/ota_api/plus.png',
          title: 'Add a Wearable',
          desc: 'Don’t See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <View style={styles.separator} />
        <ImageBackground
          source={require('./src/assets/background.png')}
          style={{width: '100%', height: '90%'}}>
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
          <FlatListSlider
            data={this.state.data}
            width={275}
            timer={4000}
            component={<Preview />}
            onPress={item => alert(JSON.stringify(item))}
            indicatorActiveWidth={10}
            contentContainerStyle={styles.contentStyle}
          />
        </ImageBackground>
        <View style={styles.separator} />
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
    marginBottom: 100,
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
