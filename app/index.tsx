import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AlertIcon from "../src/components/svg/AlertIcon";
import { Colors } from "../constants/Colors";

export default function Page() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    >
      <View style={styles.header}>
        <AlertIcon fill={Colors.white} width={64} height={64} />
        <Text style={styles.title}>Recurmind</Text>
        <Text style={styles.subtitle}>
          Set custom reminders with sound and notifications
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.white40,
          marginTop: 32,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontSize: 24,
            fontWeight: "medium",
          }}
        >
          Create Reminder
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  header: {
    // flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "medium",
    color: Colors.white,
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.subtitle,
  },
});
