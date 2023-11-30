import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// https://dribbble.com/shots/17402861-Expense-Tracker-Mobile-App-UI-Design
// https://dribbble.com/shots/22996702-Expense-tracker-Development-in-progress
// https://blog.logrocket.com/sass-react-native-guide/
const Expenses = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatarImage}
          source={{ uri: "https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" }}
          alt="Random Person's Name"
        />
        <Text style={styles.title}>Expenses</Text>
        <Text>Notifications</Text>
      </View>
      <Text>Calendar</Text>
      <Text></Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 9999
  },
  title: {
    fontSize: 20
  },

})

export default Expenses;