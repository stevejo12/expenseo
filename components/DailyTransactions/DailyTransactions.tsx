import React from 'react'
import { Text, View } from 'react-native';

interface IProps {
  currency: string,
  date: number,
  year: number,
  month: string,
  days: string,
  totalAmountTransactions: number,
  transactions: Array<any>
}

const DailyTransactions = (props: IProps) => {
  return (
    <View>
      <View>
        <Text>{props.date}</Text>
        <View>
          <Text>Yesterday</Text>
          <Text>July 2023</Text>
        </View>
        <Text>-{props.currency} {props.totalAmountTransactions}</Text>
      </View>
      <View>
        {/* logo */}
        {/* Category */}
        {/* Description */}
        {/* Amount */}
      </View>
    </View>
  )
}

export default DailyTransactions