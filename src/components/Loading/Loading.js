import {ActivityIndicator, View} from 'react-native';

/**
 * Loading component - shows a loading indicator when the app is loading data from the API or the store is loading
 * @returns {JSX.Element}
 */
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
