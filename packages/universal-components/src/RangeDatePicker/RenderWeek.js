// @flow

import * as React from 'react';
import { View } from 'react-native';

import { StyleSheet } from '../PlatformStyleSheet';
import RenderDay from './RenderDay';
import type { WeekStartsType } from './RangeDatePickerTypes';

type Props = {|
  +data: Array<?Date>,
  +onDayPress: (Array<Date>) => void,
  +keyPrefix: string,
  +selectedDates: $ReadOnlyArray<Date>,
  +isRangePicker: boolean,
  +weekStartsOn: WeekStartsType,
|};

export default function RenderWeek({
  data,
  onDayPress,
  keyPrefix,
  selectedDates,
  isRangePicker,
  weekStartsOn,
}: Props) {
  return (
    <View style={styles.row}>
      {data.map((day, index) => {
        return (
          <RenderDay
            key={`${keyPrefix}-${+day}-${index}`}
            day={day}
            onPress={onDayPress}
            selectedDates={selectedDates}
            isRangePicker={isRangePicker}
            weekStartsOn={weekStartsOn}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
