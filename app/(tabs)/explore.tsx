import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function ExploreScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>🗺️ Explore Events Nearby</ThemedText>
    </ThemedView>
  );
}
