import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, Platform, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

import Icons from './assets/Icons';
import Profiles from './assets/Profiles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  const profile = Profiles.mtl;

  return (
    <>
    {console.log(Profiles)}
    <SafeAreaView style={{flex: 0, backgroundColor: Themes.light.bg }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: Themes.light.navigation }}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image style={styles.icon} source={Icons.menu.light} />
          <Text style={styles.logo}>
            ensom
          </Text>
          <Image style={styles.icon} source={Icons.sun} />
        </View>

        <View style={[styles.content, Themes.light.shadows]}>
          <View>
            <Image style={styles.profile_img} imageStyle={styles.profile_img} source={profile.image} />
            <Text style={styles.profile_name}>
              {profile.name}
            </Text>
            <Text style={styles.profile_location}>
              {profile.caption}
            </Text>
          </View>
          
          <View style={styles.audio_card}>
            <Text style={styles.card_text}>
              My hottest take
            </Text>
            <View style={styles.audio_playback}>
              <Image style={styles.audio_play_asset} source={Icons.player.light} />
              <Image style={styles.audio_wave_asset} source={Icons.audioWave.light} />
            </View>
          </View>
        </View>
        
        <View style={styles.bottom_action}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.icon} source={Icons.discover.light} />
            <Text style={styles.icon_name}>
              Discover
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.icon} source={Icons.heart.light} />
            <Text style={styles.icon_name}>
              Matches
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.icon} source={Icons.messages.light} />
            <Text style={styles.icon_name}>
              DMs
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 41 : 54,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    fontFamily: 'Sydney-Bold',
    fontSize: Platform.isPad ? 64 : 40,
  },
  content: {
    flex: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  profile_img: {
    position: 'relative',
    borderRadius: 10,
    width: Platform.isPad ? '60%' : '80%',
    height: undefined,
    aspectRatio: 1/1.1,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  profile_name: {
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 64 : 32,
    position: 'absolute',
    top: 10,
    left: 10,
    color: Themes.light.textSecondary,
  },
  profile_location: {
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 36 : 18,
    position: 'absolute',
    bottom: 30,
    left: 10,
    color: Themes.light.textSecondary,
  },
  audio_card: {
    backgroundColor: Themes.light.bgSecondary,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  card_text: {
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 64 : 32,
  },
  audio_playback: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  audio_play_asset: {
    height: Platform.isPad ? 90 : 45,
    width: Platform.isPad ? 90 : 45,
    marginRight: 5,
  },
  audio_wave_asset: {
    height: Platform.isPad ? 90 : 45,
    width: undefined,
    aspectRatio: 733/133,
  },
  bottom_action: {
    flex: 1,
    backgroundColor: Themes.light.navigation,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  icon: {
    height: Platform.isPad ? 60 : 40,
    width: Platform.isPad ? 60 : 40,
  },
  icon_name: {
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 26 : 18,
    color: Themes.light.textSecondary,
  },
});
