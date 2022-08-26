import { useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView, Appearance, useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import PagerView from 'react-native-pager-view';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex:1, flexDirection: 'column', backgroundColor: '#171717'}}>
      <StatusBar style="light" />

      <PagerView style={{flex:1}}>

        <View style={{ backgroundColor: '#171717', width: '100%', height: '100%', justifyContent: 'center' }}  key="1">
          <View style={{flex:0, alignContent: 'center'}}>
            <Image style={{marginBottom:32, marginTop:24}} source={require('./assets/images/tutorial/tutorial-1.png')}></Image>
          </View>
          <View style={{flex:1}}>
            <Text style={{ fontFamily: 'Inter-Bold', fontSize: 32, lineHeight: 40, letterSpacing: -0.50, color: '#E8E8E8', marginHorizontal:24 }}>Set an alarm based on location</Text>
            <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: 20, lineHeight: 24, letterSpacing: -0.31, color: '#a2a2a2', marginHorizontal:24, marginTop: 8 }}>Like when you are on a long travel, sleepy and you need to get off on a certain time.</Text>
          </View>
          <View style={{flex:1, alignItems:'flex-end'}}>
          <TouchableOpacity style={{backgroundColor:'#fff', marginTop:40, marginHorizontal:24, borderRadius:100, width: 56, height:56, flex:0, justifyContent:'center'}}>
            <AntDesign name="arrowright" size={24} color="#242424" style={{textAlign:'center', textAlignVertical:'center'}}/>
          </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: '#171717', width: '100%', height: '100%', justifyContent: 'center' }} key="2">
          <View style={{flex:0, alignContent: 'center'}}>
            <Image style={{marginBottom:32, marginTop:24}} source={require('./assets/images/tutorial/tutorial-2.png')}></Image>
          </View>
          <View style={{flex:1}}>
            <Text style={{ fontFamily: 'Inter-Bold', fontSize: 32, lineHeight: 40, letterSpacing: -0.50, color: '#E8E8E8', marginHorizontal:24 }}>Or whatever your need is</Text>
            <Text style={{ fontFamily: 'Inter-SemiBold', fontSize: 20, lineHeight: 24, letterSpacing: -0.31, color: '#a2a2a2', marginHorizontal:24, marginTop: 8 }}>Just choose a time and select a place where you want to be woken up.</Text>
          </View>
          <View style={{flex:1, alignItems:'flex-end'}}>
          <TouchableOpacity style={{backgroundColor:'#fff', marginTop:40, marginHorizontal:24, borderRadius:100, width: 163}}>
            <Text style={{fontFamily: 'Inter-Bold', fontSize:16, lineHeight:24, textAlign:'center', paddingVertical:16, paddingHorizontal:40, letterSpacing: -0.25}}>Let's begin</Text>
          </TouchableOpacity>
          </View>
        </View>

      </PagerView>

    </SafeAreaView>
  );
}