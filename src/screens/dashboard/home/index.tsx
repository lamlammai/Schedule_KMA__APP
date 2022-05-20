import React from 'react';

import {SafeAreaView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Text} from 'src/components';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Calendar
        markingType={'period'}
        markedDates={{
          '2012-05-15': {marked: true, dotColor: '#50cebb'},
          '2012-05-16': {marked: true, dotColor: '#50cebb'},
          '2012-05-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2012-05-22': {color: '#70d7c7', textColor: 'white'},
          '2012-05-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2012-05-24': {color: '#70d7c7', textColor: 'white'},
          '2012-05-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
