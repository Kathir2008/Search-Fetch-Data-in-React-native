import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notifee from '@notifee/react-native';
import { Button } from 'react-native';

const NotificationButton = () => {
async function requestNotificationPermission() {
  const settings = await notifee.requestPermission();
}

// Call the function to request permissions
requestNotificationPermission();
async function sendForegroundNotification() {
  try {
    const notification = await notifee.displayNotification({
      title: 'Foreground Notification',
      body: 'This is a notification in the foreground.',
    });

    console.log('Foreground notification displayed:', notification);
  } catch (error) {
    console.error('Error displaying notification:', error);
  }
}
  return (
    <View>
      <Text>NotificationButton</Text>
      <Button title="Send Foreground Notification" onPress={sendForegroundNotification} />
    </View>
  )
}

export default NotificationButton

const styles = StyleSheet.create({})