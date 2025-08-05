import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MenTab } from "../men-tab/men-tab";
import { WomanTab } from "../woman-tab/woman-tab";
import { styles } from "./styles";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabStyle,
        tabBarLabelStyle: styles.label,
        tabBarIndicatorStyle: styles.indicator,
      }}
    >
      <Tab.Screen name="Produtos Masculinos" component={MenTab} />
      <Tab.Screen name="Produtos Femininos" component={WomanTab} />
    </Tab.Navigator>
  );
}
