import { Text, TextProps } from 'react-native';
import useThemeColors from '@/hooks/useThemeColors';

export default function ThemedText({ style, ...props }: TextProps) {
  const colors = useThemeColors();
  return <Text style={[{ color: colors.text }, style]} {...props} />;
}
