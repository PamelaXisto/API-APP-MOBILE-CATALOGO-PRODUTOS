import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#2567E8",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
                fontSize: 15, 
            },
            tabBarStyle: {
                height: 70,
            },
        }}
    >
      <Tabs.Screen
        name="product-tabs"
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuration-tabs"
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
