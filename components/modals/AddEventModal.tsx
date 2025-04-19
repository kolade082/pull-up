import React, { useState } from 'react';
import { Modal, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import useThemeColors from '@/hooks/useThemeColors';

interface AddEventModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ visible, onClose }) => {
  const theme = useThemeColors();
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleAddEvent = () => {
    // Logic to handle adding the event
    console.log('Event Added:', eventTitle, eventDescription, eventDate);
    onClose(); // Close the modal after adding the event
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ThemedView style={styles.modalBackground}>
        <ThemedView style={[styles.modalContent, { backgroundColor: theme.background }]}>
          <ThemedText style={[styles.title, { color: theme.text }]}>Add New Event</ThemedText>

          {/* Event Title */}
          <TextInput
            style={[styles.input, { borderColor: theme.text, color: theme.text }]}
            placeholder="Event Title"
            placeholderTextColor={theme.text}
            value={eventTitle}
            onChangeText={setEventTitle}
          />

          {/* Event Description */}
          <TextInput
            style={[styles.input, { borderColor: theme.text, color: theme.text }]}
            placeholder="Event Description"
            placeholderTextColor={theme.text}
            value={eventDescription}
            onChangeText={setEventDescription}
            multiline
            numberOfLines={4}
          />

          {/* Event Date */}
          <TextInput
            style={[styles.input, { borderColor: theme.text, color: theme.text }]}
            placeholder="Event Date (YYYY-MM-DD)"
            placeholderTextColor={theme.text}
            value={eventDate}
            onChangeText={setEventDate}
          />

          {/* Add Event Button */}
          <Button title="Add Event" onPress={handleAddEvent} color="#007BFF" />

          {/* Close Button */}
          <Pressable onPress={onClose} style={styles.closeButton}>
            <ThemedText style={{ color: theme.text }}>Close</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: '80%', // Fixed width of modal for consistency
    alignItems: 'center',
    maxWidth: 400, // Max width to prevent it from becoming too large
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF5733',
    borderRadius: 5,
  },
});

export default AddEventModal;
