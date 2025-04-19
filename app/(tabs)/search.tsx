import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function SearchScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>🔍 Search & Filter Events</ThemedText>
      {/* TODO: Add search input + filters */}
    </ThemedView>
  );
}
