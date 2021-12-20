import 'package:cicadahack/screens/home.dart';
import 'package:cicadahack/screens/sign_in.dart';
import 'package:cicadahack/screens/splash_screen.dart';
import 'package:cicadahack/services/auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import './routes.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
        statusBarIconBrightness: Brightness.light,
        statusBarBrightness: Brightness.light),
  );

  await Firebase.initializeApp();

  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cicada Hack',
      theme: ThemeData(
        primaryColor: const Color(0xFF0F0230),
        backgroundColor: const Color(0xFFEEEEEE),
        visualDensity: VisualDensity.adaptivePlatformDensity,
        colorScheme: ColorScheme.fromSwatch()
            .copyWith(secondary: const Color(0xFF361767)),
        textButtonTheme: TextButtonThemeData(
          style: TextButton.styleFrom(primary: const Color(0xFF361767)),
        ),
        outlinedButtonTheme: OutlinedButtonThemeData(
          style: OutlinedButton.styleFrom(primary: const Color(0xFF361767)),
        ),
      ),
      debugShowCheckedModeBanner: false,
      home: AuthWrapper(),
      routes: routes,
    );
  }
}

class AuthWrapper extends ConsumerWidget {
  AuthWrapper({Key? key}) : super(key: key);

  final authStateProvider =
      StreamProvider((ref) => ref.watch(authProvider).authStateChanges);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _authState = ref.watch(authStateProvider);
    return _authState.when(
      data: (value) {
        return value != null
            ? const SplashScreen(changeRoute: Home.routeName)
            : const SplashScreen(changeRoute: SignIn.routeName);
      },
      loading: () {
        return const Scaffold(
          body: Center(
            child: CircularProgressIndicator(),
          ),
        );
      },
      error: (_, __) {
        return const Scaffold(
          body: Center(
            child: Text('Unexpected error occurred'),
          ),
        );
      },
    );
  }
}
