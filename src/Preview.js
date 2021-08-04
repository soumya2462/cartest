import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import Card from './Card';

export default Preview = ({
  style,
  item,
  imageKey,
  iconImage,
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <View style={[styles.videoContainer]}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <View
          style={[styles.videoPreview, active ? {} : {height: 350}]}
          source={{uri: item[imageKey]}}>
          <Image
            style={[styles.imagePreview]}
            source={{uri: item[imageKey]}}></Image>
            <Image
            style={[styles.iconImage]}
            source={{uri: item[iconImage]}}></Image>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>View</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 250,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  videoPreview: {
    paddingLeft: 15,
    paddingRight: 15,
    width: 200,
    height: 350,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imagePreview: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    //backgroundColor: '#fff',
    position: 'absolute',
    top: -60,
  },
  desc: {
    textAlign: 'center',
    color: '#A0A9B8',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonView: {
    backgroundColor: '#303371',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,
    color: '#4E5B76',
    fontWeight: '700',
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
});
