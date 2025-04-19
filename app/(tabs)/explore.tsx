import React, { useState } from "react"; // Correct import
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, SafeAreaView } from "react-native";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import useThemeColors from "@/hooks/useThemeColors";
import AddEventModal from "@/components/modals/AddEventModal"; // Import modal component

export default function ExploreScreen() {
  const router = useRouter();
  const theme = useThemeColors();
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal state

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.topBar}>
        <ThemedText style={[styles.logoText, { color: theme.text }]}>
          Pull Up
        </ThemedText>
        <Pressable onPress={openModal}>
          <Ionicons name="add-circle-outline" size={28} color={theme.text} />
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText style={{ color: theme.text }}>
          🗺️ Explore Events Nearby
        </ThemedText>
      </ThemedView>
    
      <AddEventModal visible={isModalVisible} onClose={closeModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
