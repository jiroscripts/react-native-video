import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { VideoView, useVideoPlayer } from 'react-native-video';

import videoSource from './mov_bbb.mp4';

const { width: screenWidth } = Dimensions.get('window');

export const App = () => {
  const player = useVideoPlayer(videoSource, (_player) => {
    _player.muted = true;
    _player.playInBackground = true;
    _player.ignoreSilentSwitchMode = 'obey';
    _player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView player={player} style={styles.video} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'absolute',
  },
  video: {
    width: screenWidth,
    height: screenWidth,
  },
});

export default App;
