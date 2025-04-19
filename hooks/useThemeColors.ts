import { useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

export default function useThemeColors() {
  const scheme = useColorScheme();
  return Colors[scheme ?? 'light'];
}
