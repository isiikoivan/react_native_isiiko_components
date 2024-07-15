/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,

} from 'react-native';

import ApplicationButton from './components/button';
import Icon from '@react-native-vector-icons/fontawesome6';
import ApplicationViewBalance from './components/mainlayout';
import StatusBarComponent from './components/statusbar';


function App(): React.JSX.Element {

  function onPress(): void {
    console.log("button pressed")
    // throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView >
      <StatusBarComponent />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <ApplicationViewBalance >
          <ApplicationButton title={'Login'} icon_set={true} />

          {/* <ApplicationButton title={'Login'}>
            <Icon name= icon_name   size={30} color="#900" />;
          </ApplicationButton> */}
        </ApplicationViewBalance>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default App;
