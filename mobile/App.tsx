import { StatusBar } from 'expo-status-bar'
import { Suspense } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RelayEnvironmentProvider } from 'react-relay'
import { environment } from './src/RelayEnvironment'
import Page from './src/screens/Page'

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Suspense fallback={<Text>Loading...</Text>}>
          <Page />
        </Suspense>
      </View>
    </RelayEnvironmentProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
