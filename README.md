This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Historical Places React Native App:

To create a React Native app in JavaScript that follows the "Historical Places App" test plan, you can start by setting up the foundational structure of the app. 

##  Step 4: Install Dependencies:
For this app, we'll use the following dependencies:

Redux: For state management.
Redux-Observable: For handling asynchronous actions.
React Navigation: For screen navigation.


##  Step 5:  Implement Redux for State Management:
1:  Setup Redux Store
2:  Define Reducer 
3:  Define Actions 
4:  Define Epics 

## Step 6: Create Components:
1:  HistoricalPlace Component
2:  FunFeature Component


## Step 7: Create Screens:
1:  HomeScreen 
2:  DetailsScreen 
3:  Splash Screen

## Step 8: Setup Navigation:
Navigation Setup  in App.js

## Conclusion:
In the Historical Places App, the user is greeted by an attractive splash screen upon launch. By clicking the "Explore" button, the user seamlessly navigates to the Home Screen, which displays a list of popular and suggested historical places. The Home Screen allows users to mark places as visited or unvisited, with real-time updates reflected in the UI. Additionally, users can explore the details of each place by selecting any item from the list, which will lead them to the Detail Screen. On this screen, the user can view comprehensive information about the selected place, including a description, price, and rating.

The app efficiently handles data management by fetching and displaying historical places from the server or static data . The visited places feature allows users to dynamically toggle between marking places as visited and unvisited with instant UI feedback. The app also includes a fun feature where users can receive a random place suggestion, enhancing interactivity.

Throughout the app, the UI and UX maintain consistency, ensuring a visually pleasing and intuitive user experience. Redux and Redux-Observable are employed for state management, ensuring that data flows smoothly across different components. Route handling and navigation are implemented flawlessly, allowing users to transition between screens without any interruptions. Finally, the app ensures cross-platform consistency, performing equally well on both iOS and Android, providing users with a seamless and engaging experience across devices.
