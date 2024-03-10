
# ionicBlog
![users ios image](/src/assets/usersIos.png);
![weather](/src/assets/weatherIos.png);
![users image](/src/assets/users.png);
![device info](/src/assets/info.png);
![blogs list](/src/assets/blog.png);

# Capacitor Plugins Overview

## Capacitor Preferences
The Capacitor Preferences plugin provides a simple key-value store for persistently storing small amounts of data. It allows you to save and retrieve preferences such as user settings, application state, or any other data that needs to be persisted across app sessions.

## Capacitor Network
The Capacitor Network plugin provides information about the device's network connection, including details such as the connection type (e.g., WiFi, cellular), whether the device is online or offline, and the current network status. This plugin is useful for determining the availability of network connectivity and adapting app behavior accordingly.

## Capacitor Device
The Capacitor Device plugin provides information about the device on which the app is running. This includes details such as the device model, manufacturer, operating system, and hardware specifications. Additionally, it provides methods for retrieving unique identifiers for the device, such as the device ID. This plugin is useful for accessing device-specific information and adapting app functionality based on the device's capabilities.

These Capacitor plugins enhance the functionality of Ionic apps by providing access to device features and system-level capabilities, allowing developers to create more powerful and versatile applications.



# Check first
global packages:
`npm list -g --depth=0`
**OR**
`npm root -g | gci` in Power Shell 

 
> ionic start nameOfTheProject blank --type=angular

> ionic capacitor add

> ionic capacitor open


> ionic generate page name

>  npx cap open android

> ionic build && npx cap sync



> npm install @capacitor/preferences && npx cap sync

> npm install @capacitor/network && npx cap sync 

> npm install @capacitor/device && npx cap sync
