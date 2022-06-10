import { Text, View, ScrollView, Button } from "react-native"
import { useEffect, useState } from "react"
import appsFlyer from "react-native-appsflyer"

export default function App() {
  const [gcd, setGcd] = useState('No GCD Yet...');
  const [oaoa, setOaoa] = useState('No UDL Yet...');

  useEffect(() => {
    const gcdListener = appsFlyer.onInstallConversionData((res) => setGcd(JSON.stringify(res, null, 5)));
    const oaoaListener = appsFlyer.onDeepLink((res) => setOaoa(JSON.stringify(res, null, 5)));

    appsFlyer.initSdk({
        isDebug: true,
        devKey: 'Us4xXxXxXxQed',
        onInstallConversionDataListener: true,
        onDeepLinkListener: true,
        timeToWaitForATTUserAuthorization: 5,
        appId: '7xXxXxXx1',
      },
      (res) => console.log("AppsFlyer Success", res),
      (err) => console.error("AppsFlyer Error", err)
    )
  }, [])

  return (
    <View style={[{ flex: 1, marginTop: 30 }]}>
      <View style={[{ flex: 2 }]}>
        <View style={{ backgroundColor: 'grey', alignItems: 'center' }}>
          <Text>GCD</Text>
        </View>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Text style={[]}>{gcd}</Text>
        </ScrollView>
      </View>
      <View style={[{ flex: 2 }]}>
        <View style={{ backgroundColor: 'grey', alignItems: 'center' }}>
          <Text>UDL</Text>
        </View>
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Text style={[]}>{oaoa}</Text>
        </ScrollView>
      </View>
      <View style={[{ flex: 1 }]}>
        <Button title='Log Event' onPress={() =>
          appsFlyer.logEvent("just_event", {
            "param1": "foo",
            "param2": 123,
          })} />
      </View>
    </View>
  )
}
