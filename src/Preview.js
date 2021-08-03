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
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <View
          style={[styles.videoPreview, active ? {} : {height: 350}]}
          source={{uri: item[imageKey]}}
        >
          <Image style={[styles.imagePreview]}
          source={{uri: item[imageKey]}}>

          </Image>
         <Text style={styles.desc}>{item.desc}</Text>
         <View style={styles.buttonView}>
          <Text style={styles.buttonText}>
            View
          </Text>
        </View>
        </View>
      </View>
     
      <TouchableOpacity>
       
      </TouchableOpacity>
    </TouchableOpacity>
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
    width: 200,
    height: 250,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview:{
    width: 50,
    height: 50,
    resizeMode: 'cover',
    backgroundColor:'#fff',
  },
  desc: {
    color: '#000',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
    marginTop: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
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
    marginTop: 40
  },
  buttonText: {
    color: 'white'
  }
});
