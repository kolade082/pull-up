import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function ProfileScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>👤 User Profile</ThemedText>
      {/* TODO: Add profile settings or login info */}
    </ThemedView>
  );
}
