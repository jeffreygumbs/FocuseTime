import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../components/roudedButton'

export const Timing = ({onChangeTime}) => {
  return(
    <>
<View style={styles.timingButten}>
<RoundedButton size={75} title='5' onPress={() => onChangeTime(5)}/>
</View>
<View style={styles.timingButten}>
<RoundedButton size={75} title='10' onPress={() => onChangeTime(10)}/>
</View>
<View style={styles.timingButten}>
<RoundedButton size={75} title='20' onPress={() => onChangeTime(10)}/>
</View>
</>
  )
}

const styles = StyleSheet.create({
  timingButten: {
    flex:1,
    alighItem: 'center'
  }
});