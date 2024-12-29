import React, { useState } from 'react'
import { View, Text, Image, Pressable, StatusBar, StyleSheet, UIManager, Platform, ScrollView } from 'react-native'
import { useRouter } from 'expo-router';
import ArrowRight from '@/assets/images/Arrow Right.png'

import SettingsCategoryes from '../components/settings/SettingsCategoryes';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


export default function SettingsScreen() {
  const router = useRouter();
  return (
    <>
      <StatusBar
        backgroundColor={'#718296'}
      />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.BSTU}>БГТУ</Text>
          <Pressable onPress={() => router.back()} style={styles.settingsContainer}>
            <Image style={styles.settings} source={ArrowRight} />
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.container}>

      <SettingsCategoryes />
      </ScrollView>

      <View style={styles.bottomStripe}></View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
    backgroundColor: '#DADDE1',
    paddingTop: 32,
  },
  bottomStripe: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#718296',
    height: 40,
    marginTop: 10,
  },
  header: {
    // flex: 1,
  },
  headerTop: {
    height: 80,
    backgroundColor: '#718296',
    paddingRight: 20,
    // paddingLeft: 10,
  },
  settingsContainer: {
    width: 30,
    position: 'absolute',
    right: 20,
  },

  settings: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },

  BSTU: {
    fontFamily: 'Stetica',
    fontWeight: 700,
    fontSize: 64,
    color: '#dadde1',
    position: 'absolute',
    left: 10,
    bottom: -24,
  },


})
