import { View, ViewProps } from 'react-native';
import useThemeColors from '@/hooks/useThemeColors';

export default function ThemedView({ style, ...props }: ViewProps) {
  const colors = useThemeColors();
  return <View style={[{ backgroundColor: colors.background }, style]} {...props} />;
}
