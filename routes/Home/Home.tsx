import { useLinkTo } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const linkTo = useLinkTo();
  const [currency, setCurrency] = useState("Rp");
  const [totalAmount, setTotalAmount] = useState<number>(10000000);
  const [totalIncome, setTotalIncome] = useState<number>(3500000);
  const [totalSpending, setTotalSpending] = useState<number>(1373520);
  const [totalRemaining, setTotalRemaining] = useState<number>(totalIncome - totalSpending)


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expenses</Text>
        <Text style={styles.balance}>
          {`${currency} ${totalAmount.toLocaleString()}`}
        </Text>
      </View>
      <View style={[styles.flexRow, styles.totalExpense]}>
        <View style={styles.totalExpenseView}>
          <Text>Income</Text>
        </View>
        <View style={styles.totalExpenseView}>
          <Text style={[styles.green, styles.textRight]}>
            {`${currency} ${totalIncome.toLocaleString()}`}
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.totalExpense]}>
        <View style={styles.totalExpenseView}>
          <Text>Spending</Text>
        </View>
        <View style={styles.totalExpenseView}>
          <Text style={[styles.red, styles.textRight]}>
            {`${currency} ${totalSpending.toLocaleString()}`}
          </Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.totalExpense]}>
        <View style={styles.totalExpenseView}>
          <Text>Remaining</Text>
        </View>
        <View style={[styles.totalExpenseView, styles.borderGrey]}>
          <Text style={[
            styles.textRight,
            totalRemaining < 0 ? styles.red : styles.green]
          }>
            {`${currency} ${totalRemaining.toLocaleString()}`}
          </Text>
        </View>
      </View>
      <Button
        title="Back"
        onPress={() => {
          linkTo("/transaction");
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    maxWidth: 600
  },
  header: {
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 16,
  },
  balance: {
    fontSize: 20,
    fontWeight: "bold"
  },
  flexRow: {
    flexDirection: "row"
  },
  red: {
    color: "#ff0000"
  },
  green: {
    color: "#008000"
  },
  totalExpense: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    marginBottom: 5
  },
  totalExpenseView: {
    flex: 1
  },
  textRight: {
    textAlign: "right",
  },
  borderGrey: {
    borderTopWidth: 1,
    borderTopColor: "rgba(128,128,128,0.3)",
  }
})

export default Home