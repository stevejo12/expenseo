import { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [currency, setCurrency] = useState("Rp");
  const [totalAmount, setTotalAmount] = useState<number>(123123123);
  const [totalIncome, setTotalIncome] = useState<number>(123123123);
  const [totalSpending, setTotalSpending] = useState<number>(123123124);
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
        <Text>Income</Text>
        <Text style={styles.green}>
          {`${currency} ${totalIncome.toLocaleString()}`}
        </Text>
      </View>
      <View style={[styles.flexRow, styles.totalExpense]}>
        <Text>Expense</Text>
        <Text style={styles.red}>
          {`${currency} ${totalSpending.toLocaleString()}`}
        </Text>
      </View>
      <View style={[styles.flexRow, styles.totalExpense]}>
        <Text>Remaining</Text>
        <Text style={totalRemaining < 0 ? styles.red : styles.green }>
          {`${currency} ${totalRemaining.toLocaleString()}`}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
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
})