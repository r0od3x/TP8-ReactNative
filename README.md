# TP8 — React Native Todo App (Firebase, offline & native features)

A task-management mobile app built with **Expo / React Native** as part of a React Native course (TP8).
It combines Firebase authentication, cloud sync with Firestore, offline storage with SQLite,
and several native device features.

## Features

- **Authentication** — email/password and Google Sign-In (Firebase Auth)
- **Tasks** — create, edit, complete and delete todos, stored per user in Firestore
- **Offline mode** — local SQLite storage with two-way sync to Firestore
- **Native features** — camera, contacts, geolocation, local notifications / reminders
- **Theming** — light / dark mode (React Context)
- **Navigation** — native stack (auth flow) + drawer (Tasks, Profile, Debug)
- **Debug screen** — checks environment variables and Firestore connectivity
- **State management exercises** — Redux Toolkit slice and Zustand store
- **Security rules** — `firestore.rules` restricts every user to their own documents

## Tech stack

| | |
|---|---|
| Framework | Expo SDK 54, React Native 0.81, React 19 |
| Backend | Firebase Auth, Cloud Firestore |
| Local storage | expo-sqlite, AsyncStorage |
| State | React Context, Redux Toolkit, Zustand |
| Navigation | React Navigation 7 (native-stack, drawer, bottom-tabs) |
| Native APIs | expo-camera, expo-contacts, expo-location, expo-notifications |

## Getting started

### 1. Firebase setup

1. Create a project in the [Firebase console](https://console.firebase.google.com/)
2. Add a **Web app** and copy its config
3. Enable **Authentication → Email/Password** (and **Google** if you want Google Sign-In)
4. Create a **Cloud Firestore** database and publish the rules from [`firestore.rules`](firestore.rules)

### 2. Environment variables

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `EXPO_PUBLIC_FIREBASE_API_KEY` | Firebase web API key |
| `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN` | `<project>.firebaseapp.com` |
| `EXPO_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `EXPO_PUBLIC_FIREBASE_APP_ID` | Firebase web app ID |
| `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` | OAuth web client ID (Google Sign-In) |
| `EXPO_PUBLIC_API_URL` | REST API for the fetch/axios demos (default: JSONPlaceholder) |

Check your setup with:

```bash
npm run validate
```

### 3. Run

```bash
npm install
npm start            # Expo Go (scan QR code), or press a / i / w
```

`start_offline.bat` starts the web version in Expo offline mode (useful on restricted networks).

## Project structure

```
├── App.js                 # Providers + navigation root
├── navigation/            # AppStack (auth flow), AppDrawer
├── screens/               # UI screens
├── context/               # AuthContext, ThemeContext
├── services/
│   ├── firebase.js        # Firebase init (from env)
│   ├── firestore.js       # Firestore CRUD
│   ├── database.js        # SQLite offline storage
│   ├── sync.js            # SQLite ⇄ Firestore sync
│   ├── notifications.js   # Local notifications
│   └── api.js             # fetch / axios demo
├── store/                 # Redux Toolkit slice, Zustand store
├── scripts/validate_env.js
└── firestore.rules
```

### Screens wired into navigation

`LoginScreen` → drawer with `HomeScreen` (tasks), `ProfileScreen`, `DevDebugScreen`.

### Exercise screens (not wired into navigation)

The following screens come from individual TP exercises and are kept for reference:
`TodoListScreen` (Zustand), `TodoListFetchScreen` (fetch/axios), `TodoListOfflineScreen` (SQLite + sync),
`TodoDetailsScreen`, `CameraScreen`, `ContactsScreen`, `LocationScreen`, `NotificationsScreen`,
`NativeFeaturesScreen`, `RegisterScreen`.
Some drafts (`CategoryManagerScreen`, `ReminderScreen`, `SettingsScreen`, `SuggestionsScreen`, `TaskFormScreen`)
reference Firestore helpers that were never implemented and would need to be completed before use.
